'use strict';

const db = require('../db');

const LocationService = {
  async getLocations() {
    // need to make seed data have different times
    const locations = await db.select().from('locations').orderBy('id', 'desc');
    return locations;
  },

  async addLocation(props) {
    return db('locations').insert(props);
  },
};

module.exports = LocationService;
