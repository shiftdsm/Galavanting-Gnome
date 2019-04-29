'use strict';

const Knex = require('knex');
const knexfile = require('../db/knexfile');

const knex = Knex(knexfile[process.env.NODE_ENV]);

module.exports = knex;
