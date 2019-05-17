'use strict';

const Knex = require('knex');
const knexfile = require('../db/knexfile');

const env = process.env.NODE_ENV || 'development';
const knex = Knex(knexfile[env]);

module.exports = knex;
