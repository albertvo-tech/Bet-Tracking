var config = require("../utilities/config").config;

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.DB_URL_MYSQL.host,
    user: config.DB_URL_MYSQL.user,
    password: config.DB_URL_MYSQL.password,
    database: config.DB_URL_MYSQL.database,
});

/*connection.connect(() => {
    require('../models/leagues').initialize();
});

connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
});*/

let getDB = () => {
    return connection;
}

module.exports = {
    getDB: getDB
}