const { Client } = require('pg');

const connectionString = `postgresql://${process.env.POSTGRES_USER}@localhost/${process.env.POSTGRES_DB}` || 'postgres://localhost/thumbnails';
const client = new Client(connectionString);

describe('Test querying the database', () => {
  beforeAll(() => client.connect());

  afterAll(() => client.end());

  test('Should get an array length of 300', () => client
    .query('SELECT * FROM items')
    .then((res) => {
      expect(res.rows).toBeInstanceOf(Array);
    })
    .catch(e => console.error(e.stack)));

  test('Should get category when queried with ID', () => {
    const id = 0;
    return client.query('SELECT category FROM items WHERE id = $1', [id])
      .then(({ rows }) => {
        expect(rows[0]).toBeInstanceOf(Object);
        expect(rows[0].category).toBe('Electronics');
      })
      .catch(e => console.error(e.stack));
  });

  test('Should get the list of items in the same category with out the original item', () => {
    const id = 0;

    return client.query('SELECT category FROM items WHERE id = $1', [id])
      .then((res) => {
        const { category } = res.rows[0];
        return client.query('SELECT * FROM items WHERE category = $1 AND id != $2', [category, id])
          .then((list) => {
            expect(list.rows).toBeInstanceOf(Array);
            expect(list.rows[0].category).toBe('Electronics');
          })
          .catch(e => console.error(e.stack));
      })
      .catch(e => console.error(e.stack));
  });
});
