const client = require('../../db/pgClient');

module.exports = {
  getList: (id, callback) => client
    .query('SELECT category FROM items WHERE id = $1', [id])
    .then((res) => {
      const { category } = res.rows[0];
      return client.query('SELECT * FROM items WHERE category = $1 AND id != $2', [category, id])
        .then(list => callback(null, list))
        .catch(e => callback(e.stack, null));
    })
    .catch(e => callback(e.stack, null)),
};
