'use strict';

const db = require('../db');
const LocationService = require('./location-service');

describe('LocationService', () => {
  describe('addLocation', () => {
    it('should insert a location', async () => {
      const [{ count: firstCount }] = await db('locations').count();

      await LocationService.addLocation({
        lat: 120.123,
        lon: 121.123,
        kph: 60,
        heading: 100,
        alt: 12,
      });

      const [{ count: secondCount }] = await db('locations').count();

      expect(parseInt(secondCount, 10)).toBeGreaterThan(parseInt(firstCount, 10));
    });
  });
});
