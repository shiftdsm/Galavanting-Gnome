'use strict';

const Knex = require('knex');
const knexfile = require('../db/knexfile');

const knex = Knex(knexfile.development);

class LocationRepository {
  static async getLocations() {
    return knex.select().from('locations');
  }

  static async addLocation(payload) {
    return knex('locations').insert({
      lat: payload.lat,
      lon: payload.lon,
    });
  }

  static async latestLocation() {
    return knex.select().from('locations').orderBy('created_at', 'desc').limit(1);
  }
}

module.exports = LocationRepository;
