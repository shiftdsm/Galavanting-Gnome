'use strict';

const Joi = require('@hapi/joi');
const r = require('rethinkdb');

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
    const conn = await r.connect({ db: 'galavanting_gnome_dev' });
    const locations = await r.table('locations').coerceTo('array').run(conn);
    await conn.close();

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
    const conn = await r.connect({ db: 'galavanting_gnome_dev' });
    await r.table('locations').insert(payload).run(conn);
    await conn.close();

    return h.response().code(201);
  },
};

module.exports = [
  getLocations,
  postLocation,
];
