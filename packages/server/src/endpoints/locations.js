'use strict';

const Joi = require('@hapi/joi');
const Repo = require('../db');

const getLocations = {
  method: 'GET',
  path: '/locations',
  options: {
    tags: ['api'],
    response: {
      schema: Joi.array().items(
        Joi.object({
          id: Joi.any().required(),
          lat: Joi.string().required(),
          lon: Joi.string().required(),
        }),
      ),
      modify: true,
      options: {
        stripUnknown: true,
      },
    },
  },
  async handler() {
    return Repo.getLocations();
  },
};

const postLocation = {
  method: 'POST',
  path: '/locations',
  options: {
    tags: ['api'],
    validate: {
      payload: {
        lat: Joi.string().required(),
        lon: Joi.string().required(),
      },
    },
  },
  async handler({ payload }, h) {
    await Repo.addLocation(payload);

    return h.response().code(201);
  },
};

module.exports = [
  getLocations,
  postLocation,
];
