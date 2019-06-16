'use strict';

const Joi = require('@hapi/joi');
const LocationService = require('../services/location-service');

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
    return LocationService.getLocations();
  },
};

const postLocation = {
  method: 'POST',
  path: '/locations',
  options: {
    tags: ['api'],
    validate: {
      payload: {
        lat: Joi.number().precision(8).required(),
        lon: Joi.number().precision(8).required(),
        kph: Joi.number().precision(8).required(),
        heading: Joi.number().precision(8).required(),
        alt: Joi.number().precision(8).required(),
        battery: Joi.number().required(),
      },
    },
  },
  async handler({ payload }, h) {
    await LocationService.addLocation(payload);
    return h.response().code(201);
  },
};

module.exports = [
  getLocations,
  postLocation,
];
