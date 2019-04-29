'use strict';

const Hapi = require('hapi');
const routes = require('./endpoints');

const server = Hapi.server({
  port: 5000,
  host: 'localhost',
  routes: {
    cors: true,
  },
});

server.route(routes);

const init = async () => {
  await server.initialize();
  return server;
};

const start = async () => {
  await server.start();
  console.log('Server listening at:', server.info.uri);
};

module.exports = {
  start,
  init,
};
