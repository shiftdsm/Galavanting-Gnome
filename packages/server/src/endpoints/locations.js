'use strict';

const db = require('../db');
const Joi = require('@hapi/joi');

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
  options: {
    validate: {
      payload: {
        lat: Joi.string().required(),
        lon: Joi.string().required(),
      },
    },
  },
  async handler({ payload }, h) {
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
