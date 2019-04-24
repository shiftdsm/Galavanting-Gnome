const db = require('../db');

const getLocations = {
  method: 'GET',
  path: '/locations',
  async handler() {
    const locations = await db.select().from('locations');
    return locations;
  },
};

module.exports = [
  getLocations,
];
