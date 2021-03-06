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
      const unpublishedLocations = await tx('locations')
        .select('id', 'lat', 'lon')
        .whereNull('published_at');

      const locationIdsToPublish = unpublishedLocations.reduce((locations, unpublishedLocation) => {
        if (this.canPublishLocation(props, unpublishedLocation)) {
          return locations.concat(unpublishedLocation.id);
        }

        return locations;
      }, []);

      await tx('locations').update('published_at', new Date()).whereIn('id', locationIdsToPublish);

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
