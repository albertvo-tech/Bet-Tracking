let dbConfig = require("../utilities/mysqlConfig");

let getLeagues = () => {
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`select * from leagues`,
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
    getLeagues: getLeagues
}