'use strict';

const server = require('./server');

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

server.start();
