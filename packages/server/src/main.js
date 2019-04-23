'use strict';

const Hapi = require('hapi');
const routes = require('./endpoints');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();

  console.log('Server listening at:', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
