'use strict';

const locations = require('./seed_locations');

exports.seed = async function seed(knex) {
  await knex('locations').del();

  return knex('locations').insert(locations);
};
