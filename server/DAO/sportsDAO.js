let dbConfig = require("../utilities/mysqlConfig");

let getSports = () => {
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT sport_name FROM sports`,
        function (err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });

    connection.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
}

let getSportsById = (criteria) => {
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT sport_name FROM sports where SPORT_ID = '${criteria.id}'`,
        function (err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });

    connection.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
}

module.exports = {
    getSports: getSports,
    getSportsById: getSportsById
}