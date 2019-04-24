# Setup

## Database setup

1. Start postgres
1. In a terminal: `psql postgres`
1. In SQL: `CREATE DATABASE adventure_gnome_dev;`
1. Run migrations: `yarn db migrate:latest`
1. Seed database: `yarn db seed:run`
