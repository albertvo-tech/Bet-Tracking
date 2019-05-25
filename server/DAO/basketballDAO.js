let dbConfig = require("../utilities/mysqlConfig");

let getOddBasketballVal = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_VAL FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_bas.ODD_MATCH_ID=${criteria.matchId}
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_bas.ODD_REC ASC;`,
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

let getOddBasketballMax = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_VAL) AS maxodd FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_bas.ODD_MATCH_ID=${criteria.matchId};`,
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

let getOddBasketballMin = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT min(ODD_VAL) AS maxodd FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_bas.ODD_MATCH_ID=${criteria.matchId};`,
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

let getOddBasketballMaxBet = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_VAL) AS maxodd FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_bas.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='1518'
    and odds_bas.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_bas.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='1518')
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_bas.ODD_REC ASC;`,
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

let getOddBasketballAverage = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT AVG(ODD_VAL) AS maxodd FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_bas.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='1518'
    and odds_bas.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_bas
    WHERE leagues.LEAGUE_SPORT_ID = '156'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_bas.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='1518');`,
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
    getOddBasketballVal: getOddBasketballVal,
    getOddBasketballMax: getOddBasketballMax,
    getOddBasketballMin: getOddBasketballMin,
    getOddBasketballMaxBet: getOddBasketballMaxBet, 
    getOddBasketballAverage: getOddBasketballAverage
}