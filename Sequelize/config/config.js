require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "burger_dev",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "burger_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: process.env.JAWSDB_URL
  }
}