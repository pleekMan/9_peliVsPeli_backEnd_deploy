var mysql      = require('mysql');

// WITH ENVIRONMENT VARIABLES
// REMEMBER TO require("dotenv").config(); AT server.js

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
});

connection.connect();

module.exports = connection;


