# Setup

## Database setup

1. Start postgres
1. In a terminal: `psql postgres`
1. In SQL:
  - `CREATE DATABASE galavanting_gnome_dev;`
  - `CREATE DATABASE galavanting_gnome_test;`
1. Run migrations: `yarn db migrate:latest`
1. Seed database: `yarn db seed:run`


# Features

## Swagger Docs

You can visit the swagger docs at `http://localhost:5000/documentation`

See the [`hapi-swagger` docs ](https://github.com/glennjones/hapi-swagger) for more help.

# Deploying to Heroku
Run the following command to deploy to master:

```bash
git subtree push --prefix packages/server heroku master
```

Or to push a specifc branch.

```bash
git push heroku `git subtree split --prefix packages/server $(current_branch)`:master
```
