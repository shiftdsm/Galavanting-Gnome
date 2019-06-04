'use strict';

exports.up = async function up(knex) {
  return knex.schema.table('locations', (table) => {
    table.datetime('published_at');
  });
};

exports.down = async function down(knex) {
  return knex.schema.table('locations', (table) => {
    table.dropColumn('published_at');
  });
};
