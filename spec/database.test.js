const client = require('../db/pgClient');
const helpers = require('../server/db_helpers/helpers');

describe('Test querying the database', () => {
  beforeAll(() => client.connect());

  afterAll(() => client.end());

  test('Should get an array length of 300', () => client
    .query('SELECT * FROM items')
    .then(({ rows }) => {
      expect(rows).toBeInstanceOf(Array);
      expect(rows.length).toBe(300);
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
    return helpers.getList(id, (err, list) => {
      expect(list.rows).toBeInstanceOf(Array);
      expect(list.rows[0].category).toBe('Electronics');
    });
  });
});
