const { Client } = require('pg');

let connectionString;
if (process.env.POSTGRES_USER && process.env.POSTGRES_DB) {
  connectionString = `postgresql://${process.env.POSTGRES_USER}@localhost/${process.env.POSTGRES_DB}`;
} else {
  connectionString = 'postgres://localhost/thumbnails';
}

const client = new Client(connectionString);

module.exports = {
  getList: (id, callback) => {
    return client.query('SELECT category FROM items WHERE id = $1', [id])
      .then((res) => {
        const { category } = res.rows[0];
        return client.query('SELECT * FROM items WHERE category = $1 AND id != $2', [category, id])
          .then((list) => {
            callback(list);
          })
          .catch(e => console.error(e.stack));
      })
      .catch(e => console.error(e.stack));
  },
  getImages: () => {
    console.log('hi');
  },
};