exports.up = async function(knex) {
  return knex.schema.createTable('locations', (table) => {
    table.bigIncrements();
    table.string('lat').notNullable();
    table.string('lon').notNullable();
    table.timestamps(false, true);
  });
};

exports.down = async function(knex) {
  return knex.dropTable('locations');
};
