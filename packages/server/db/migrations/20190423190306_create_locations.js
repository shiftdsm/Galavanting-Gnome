'use strict';

exports.up = async function up(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.bigIncrements();
    table.string('lat').notNullable();
    table.string('lon').notNullable();
    table.timestamps(false, true);
  });
};

exports.down = async function down(knex) {
  return knex.schema.dropTable('locations');
};
