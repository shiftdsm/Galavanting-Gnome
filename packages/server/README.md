# Setup

## Database setup

1. Start postgres
1. In a terminal: `psql postgres`
1. In SQL: `CREATE DATABASE galavanting_gnome_dev;`
1. Run migrations: `yarn db migrate:latest`
1. Seed database: `yarn db seed:run`


# Features

## Swagger Docs

You can visit the swagger docs at `http://localhost:5000/documentation`

See the [`hapi-swagger` docs ](https://github.com/glennjones/hapi-swagger) for more help.
