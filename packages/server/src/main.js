'use strict';

const Hapi = require('hapi');
const routes = require('./endpoints');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: true,
    },
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
