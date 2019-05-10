'use strict';

const db = require('../db');

const getLocations = {
  method: 'GET',
  path: '/locations',
  async handler() {
    const locations = await db.select().from('locations');
    return locations;
  },
};

const postLocation = {
  method: 'POST',
  path: '/locations',
  async handler(request, h) {
    const { payload } = request;

    await db('locations').insert({
      lat: payload.lat,
      lon: payload.lon,
    });

    return h.response().code(201);
  },
};

module.exports = [
  getLocations,
  postLocation,
];
