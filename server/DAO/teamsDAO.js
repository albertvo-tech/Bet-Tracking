let dbConfig = require("../utilities/mysqlConfig");

let getTeamsLocal = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT teams.TEAM_NAME FROM matches
    INNER JOIN teams ON matches.MATCH_TEAM1_ID=teams.TEAM_ID 
    where matches.MATCH_TEAM1_ID=${criteria.teamId};`,
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

let getTeamsAway = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT teams.TEAM_NAME FROM matches
    INNER JOIN teams ON matches.MATCH_TEAM2_ID=teams.TEAM_ID 
    where matches.MATCH_TEAM2_ID=${criteria.teamId};`,
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

let getTeamsNOLOSE = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT teams.TEAM_NAME, teams.TEAM_NAME, ODD_1 FROM leagues, matches, odds_1x2 WHERE LEAGUE_SPORT_ID = '153'
    and LEAGUE_SPORT_ID=MATCH_LEAGUE_ID and ODD_MATCH_ID=MATCH_LEAGUE_ID 
    INNER JOIN teams ON matches.MATCH_TEAM2_ID=teams.TEAM_SPORT_ID;`,
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
module.exports = {
    getTeamsLocal: getTeamsLocal,
    getTeamsAway: getTeamsAway,
    getTeamsNOLOSE: getTeamsNOLOSE
}