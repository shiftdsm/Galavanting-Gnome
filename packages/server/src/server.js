'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const routes = require('./endpoints');
const pack = require('../package');

const server = Hapi.server({
  port: process.env.PORT || 5000,
  host: '0.0.0.0',
  routes: {
    cors: true,
  },
  debug: { request: ['error'] },
});

server.route(routes);

const init = async () => {
  await server.initialize();
  return server;
};

const start = async () => {
  const swaggerOptions = {
    info: {
      title: 'Galavanting Gnome API',
      version: pack.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  await server.start();

  console.log('Server listening at:', server.info.uri);
};

module.exports = {
  init,
  start,
};
