const Knex = require('knex');
const knexfile = require('../db/knexfile');

const knex = Knex(knexfile.development);

module.exports = knex;
