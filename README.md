Galavanting Gnome
=================

This is a monorepo for the Galvanting Gnome IoT project.

It uses [Lerna](https://lerna.js.org/) to help manage the codebase.
But you shouldn't need it right now to get started.

See the readme in the individual packages for more information.

## Getting setup

Install Lerna globally or run `yarn` then use Lerna with `yarn lerna`.

You can use `yarn lerna bootstrap` to quickly install all the dependencies for the server and frontend.

Follow the readme in `packages/server` for how to setup the database.

## Starting

You'll need postgres running. You can start it with `postgres -D /usr/local/var/postgres`.

With postgres running you can run, you can run `yarn lerna run start --stream` to start both the server and front end (_you can run `yarn start` in both packages individually if you want_).
