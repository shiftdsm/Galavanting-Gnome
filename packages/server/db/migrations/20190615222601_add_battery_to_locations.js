'use strict';

exports.up = async knex => (
  knex.schema.table('locations', (table) => {
    table.integer('battery');
  })
);

exports.down = async knex => (
  knex.schema.table('locations', (table) => {
    table.dropColumn('battery');
  })
);
