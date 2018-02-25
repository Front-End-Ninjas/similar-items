const { data } = require('../../../seedData/dataGenerator');

exports.seed = knex => knex('items').del()
  .then(() => knex('items').insert(data));
