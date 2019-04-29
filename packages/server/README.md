# Setup

## Database setup

1. Start postgres
1. In a terminal: `psql postgres`
1. In SQL:
  * `CREATE DATABASE galavanting_gnome_dev;`
  * `CREATE DATABASE galavanting_gnome_test;`
1. Run migrations: `yarn migrate`
1. Seed database: `yarn db seed:run`

# Testing

Run tests using `yarn test`.
Be sure to have an update schema by running the migrate commant for the test environment.

* [Testing Hapi](https://hapijs.com/tutorials/testing?lang=en_US)
