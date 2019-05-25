let dbConfig = require("../utilities/mysqlConfig");

let getLeagues = () => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`select * from leagues`,
        function (err, rows, fields) {
            if (!err) {
                console.log('The solution is: ', rows);
                response = rows;
            }
            else {
                console.log('Error while performing Query.');
            }  
        });
    
    connection.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });

    return response
}

let getLeaguesBySport = (criteria) => {
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT league_name FROM leagues, matches WHERE LEAGUE_SPORT_ID = '${criteria.id}'`,
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
    getLeagues: getLeagues,
    getLeaguesBySport: getLeaguesBySport
}