'use strict';

const Joi = require('@hapi/joi');
const db = require('../db');

const getLocations = {
  method: 'GET',
  path: '/locations',
  options: {
    tags: ['api'],
    response: {
      schema: Joi.array().items(
        Joi.object({
          id: Joi.any().required(),
          lat: Joi.number().required(),
          lon: Joi.number().required(),
        }),
      ),
      modify: true,
      options: {
        stripUnknown: true,
      },
    },
  },
  async handler() {
    // need to make seed data have different times
    const locations = await db.select().from('locations').orderBy('id', 'desc');
    return locations;
  },
};

const postLocation = {
  method: 'POST',
  path: '/locations',
  options: {
    tags: ['api'],
    validate: {
      payload: {
        lat: Joi.number().required(),
        lon: Joi.number().required(),
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
