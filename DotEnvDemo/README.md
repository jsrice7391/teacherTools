# Dotenv Environments Demo

For the papst couple of weeks we have been working with a singular environment in which the only databse that we are constantly communicating with is the one within our local machine. When we go to deploy, we use heroku deploy which uses a JAWS_DB (a micro RDS instance from AWS) and instead of using local username and passwords, it uses the configuration for its environment, or our PRODUCTION environment.

## What's next? 

Often times when developers create applications they will have multiple environments. The most common names for these environments are 

- Development
- Staging
- Production

While the first two environments are subject to change in terms of thier strict definition, the production environment is the one that the world wide web uses. Staging is usually a copy of the application that runs as close to the production environment as possible, but behind closed doors (usually a VPC or private subnet). the staging environment is the environment that project managers, QA testers, UX designers and other stake holders give their thumbs up on the product and can find any bugs, before going to production.

## The Project
As we will soon see, the sequelize-cli gives us some preconfigured environments and some cool tools to help our environments stay separate. 
1. Run `sequelize init`. This will give you a series of folders, lets look at them specifically.
- Connection - this is a JSON object that has 3 specific environments that we can use. These would be different databases that our app can use.
- Migrations - a series of files that show the changes to the environment from start to finish.
- Seeds - These are objects that we can use to populate the database. The best part about using this feature is we can seed the database, and then roll it back if the changes are not the changes we wanted. 
- Models - Sequelizes ORM in bright shiny colors allow us to configure objects that Sequelize will use to keep the data uniform throughout the application.
2. Within the config.json, point development and testing to a different environment, buy changing the database name and the connection respectively.
