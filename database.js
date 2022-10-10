const environment = process.env.NODE_ENV || "development";
// Import the knex config from the knexfile.js file.
const config = require("./knexfile");
// Pick the correct database configuration for the environment
// (such as "development")
const environmentConfig = config[environment];
const knex = require("knex");
// Create a Database Connection
const connection = knex(environmentConfig);
module.exports = connection;