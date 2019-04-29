'use strict';

const { init } = require('../server');

describe('locations', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    server.stop();
  });

  describe('GET', () => {
    it('can get a list of locations', async () => {
      const res = await server.inject({
        method: 'get',
        url: '/locations',
      });

      expect(res.statusCode).toBe(200);
    });
  });
});
