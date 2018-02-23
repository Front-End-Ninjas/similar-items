exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('items', (table) => {
    table.integer('id').primary();
    table.string('title', 300);
    table.string('type', 30);
    table.integer('rating');
    table.integer('reviews');
    table.boolean('prime');
    table.float('price');
    table.string('relativePath', 30);
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('items'),
]);
