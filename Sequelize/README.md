# Dotenv Environments Demo

For the papst couple of weeks we have been working with a singular environment in which the only databse that we are constantly communicating with is the one within our local machine. When we go to deploy, we use heroku deploy which uses a JAWS_DB (a micro RDS instance from AWS) and instead of using local username and passwords, it uses the configuration for its environment, or our PRODUCTION environment.

## What's next? 

Often times when developers create applications they will have multiple environments. The most common names for these environments are 

- Development
- Staging
- Production

While the first two environments are subject to change in terms of thier strict definition, the production environment is the one that the world wide web uses. Staging is usually a copy of the application that runs as close to the production environment as possible, but behind closed doors (usually a VPC or private subnet). the staging environment is the environment that project managers, QA testers, UX designers and other stake holders give their thumbs up on the product and can find any bugs, before going to production.

## The Project
As we will soon see, the sequelize-cli gives us some preconfigured environments and some cool tools to help our environments stay separate. The folder structure was created using the command:
```bash
sequelize init
```
It created a series of folders
- Models - the ORM side of things
- Config - configurations for connecting to databases
- Migrations - events that occurred in changing the db.
- Seeders - Data that we can use to populate and unpopulate the database we choose.

There are some small changes that have been made to the environment you are used to:

**package..json**

The `package.json` now has a series of commands. The commands when combined with `npm run` will allow us to start our application with the environments specified.
```json
"start:prod": "NODE_ENV=production nodemon server.js",
"start:dev": "NODE_ENV=development nodemon server.js",
"start:test": "NODE_ENV=test nodemon server.js"
```
So, if we want to run the application using our development server, we can run:
```bash
npm run start:dev
```
The NODE_ENV environment variable is a vairbale that tells our node server what environment it is running in. Sequelize takes care of reading this value and allowing access to the database with the corresponding name in the `config/config.js` file.

**The config/config.js file**

While sequelize is nice enough to write out these objects, it is not secure or professional to use an object like this where we have to "bake in" credentials. The way we get by this is creating a `.env` file. You will notice at the top we use `require("dotenv").config()`. This allows the dotenv package to access the variables on the `.env` file and access them in the new object. Be sure to create 3 different databses, if you want the full effect.

# Using the CLI

If we have 3 databases, a `.env` file and corresponding databases, we can now use the sequelize-cli.

Begin by creating a model of your choice. There is an example of a burgers model in the answers folder. Note that sequelize is only reading the first argument in the define function.

From here we can run 

```bash
sequelize seed:generate --name demo-burger
```
The above command generates a file within the seeds folder that will have a module.exports and two methods: up and down. Up is used to seed the database with:
```
sequelize db:seed:all
```

It will seed "development" by default, but we can specify an environment with the --env flag.
```
sequelize db:seed:all --env testing
```
**NEVER RUN SEED ON PROD**

And will be used to remove the seed data with:
```
sequelize db:seed:undo:all
```
The --env flag works here too. 

It should be noted that `db:seed` take other arguments for seeding multiple different tables.

Experiment with putting objects within the up array. It is important to note two things:

- The first argument must match the sequelize.define method that you used within your model.
- It may ask you for createdAt and updatedAt values depending on your model you created. Implement those to ge the migration to work.

Once we run `sequelize db:seed:all` we now have the seeds within the development environment and can run the command:
```bash
npm run start:dev
```
This will start the application with the database that was created within the development environment. Try switching environments and seeing what comes up. 

*The current index file loops through a list of burgers.





