const getLocations = {
  method: 'GET',
  path: '/locations',
  handler() {
    return 'i get locations';
  },
};

module.exports = [
  getLocations,
];
