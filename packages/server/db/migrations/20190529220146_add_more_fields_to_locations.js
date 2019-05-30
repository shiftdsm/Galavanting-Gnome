'use strict';

exports.up = async function up(knex) {
  await knex.schema.table('locations', (table) => {
    table.float('kph');
    table.float('heading');
    table.float('alt');
  });

  await knex('locations').update({
    kph: 0,
    heading: 0,
    alt: 0,
  });

  return knex.schema.alterTable('locations', (table) => {
    table.float('kph').notNullable().alter();
    table.float('heading').notNullable().alter();
    table.float('alt').notNullable().alter();
  });
};

exports.down = async function down(knex) {
  return knex.schema.table('locations', (table) => {
    table.dropColumns('kph', 'heading', 'alt');
  });
};
