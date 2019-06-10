'use strict';

const db = require('../db');

const LocationService = {
  async getLocations() {
    // need to make seed data have different times
    const locations = await db.select().from('locations').orderBy('id', 'desc');
    return locations;
  },

  async addLocation(props) {
    return db.transaction(async (tx) => {
      const lastLocation = await tx('locations')
        .select('id')
        .whereNull('published_at')
        .orderBy('created_at', 'desc')
        .first();

      if (lastLocation) {
        await tx('locations').update('published_at', new Date()).where(lastLocation);
      }

      return tx('locations').insert({
        ...props,
        published_at: null,
      }).returning('id');
    });
  },
};

module.exports = LocationService;
