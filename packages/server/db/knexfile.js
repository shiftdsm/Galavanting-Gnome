'use strict';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'galavanting_gnome_dev',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'galavanting_gnome_test',
    },
    pool: {
      min: 0,
      max: 10,
      idleTimeoutMillis: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
