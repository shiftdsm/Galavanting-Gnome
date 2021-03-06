'use strict';

const { init } = require('../server');

describe('locations', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('can get a list of locations', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/locations',
    });

    expect(res.statusCode).toBe(200);
  });

  it('can add a location', async () => {
    const res = await server.inject({
      method: 'post',
      url: '/locations',
      payload: {
        lat: '0',
        lon: '0',
        kph: 1.5,
        heading: 100.123,
        alt: 10.2,
        battery: 42,
      },
    });

    expect(res.statusCode).toBe(201);
  });
});
