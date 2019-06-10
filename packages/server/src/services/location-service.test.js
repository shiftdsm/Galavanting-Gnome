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

    it('should set the published_at to the previous location', async () => {
      const [prevLocationId] = await db('locations').insert({
        lat: 0,
        lon: 0,
        kph: 0,
        heading: 0,
        alt: 0,
      }).returning('id');

      const [newLocationId] = await LocationService.addLocation({
        lat: 100,
        lon: 100,
        kph: 100,
        heading: 0,
        alt: 100,
      });

      const [prevLocation] = await db('locations').select('published_at').where('id', prevLocationId);
      const [newLocation] = await db('locations').select('published_at').where('id', newLocationId);

      expect(prevLocation.published_at).not.toBeFalsy();
      expect(newLocation.published_at).toBeFalsy();
    });
  });
});
