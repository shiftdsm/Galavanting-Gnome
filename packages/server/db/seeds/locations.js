exports.seed = async function(knex) {
  await knex('locations').del();

  return knex('locations').insert([
    { lat: '100.00', lon: '100.00' },
  ]);
};
