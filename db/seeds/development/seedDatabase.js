const dummyGenerator = require('../../../dummyData/dummyGenerator');

exports.seed = knex => knex('items').del()
  .then(() => knex('items').insert(dummyGenerator.data));
