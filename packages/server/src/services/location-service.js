'use strict';

const { getDistance } = require('geolib');
const db = require('../db');

const LocationService = {
  MIN_DISTANCE_METERS: 100,

  async getLocations() {
    // need to make seed data have different times
    const locations = await db.select().from('locations').orderBy('id', 'desc');
    return locations;
  },

  async addLocation(props) {
    return db.transaction(async (tx) => {
      const lastLocation = await tx('locations')
        .select('id', 'lat', 'lon')
        .whereNull('published_at')
        .orderBy('created_at', 'desc')
        .first();

      if (this.canPublishLocation(props, lastLocation)) {
        await tx('locations').update('published_at', new Date()).where(lastLocation);
      }

      return tx('locations').insert({
        ...props,
        published_at: null,
      }).returning('id');
    });
  },

  canPublishLocation(newLocation, previousLocation) {
    if (!previousLocation) {
      return false;
    }

    const distance = getDistance(
      { latitude: newLocation.lat, longitude: newLocation.lon },
      { latitude: previousLocation.lat, longitude: previousLocation.lon },
    );

    if (distance < this.MIN_DISTANCE_METERS) {
      return false;
    }

    return true;
  },
};

module.exports = LocationService;
