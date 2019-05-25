let dbConfig = require("../utilities/mysqlConfig");

let getOddTenisT1 = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_T1 FROM leagues, matches, odds_ten 
    WHERE leagues.LEAGUE_SPORT_ID = '157'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_ten.ODD_MATCH_ID=${criteria.matchId}
    Order by odds_ten.ODD_REC ASC;`,
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

let getOddTenisT2 = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_T2 FROM leagues, matches, odds_ten 
    WHERE leagues.LEAGUE_SPORT_ID = '157'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_ten.ODD_MATCH_ID=${criteria.matchId}
    Order by odds_ten.ODD_REC ASC;`,
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

let getOddTenisMax = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_T1) AS maxodd FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_ten.ODD_MATCH_ID=${criteria.matchId}`,
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

let getOddTenisMin = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT min(ODD_T1) AS maxodd FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_ten.ODD_MATCH_ID=${criteria.matchId}`,
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

let getOddTenisMaxBet = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_T1) AS maxodd FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_ten.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687'
    and odds_ten.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_ten.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687')
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_ten.ODD_REC ASC;`,
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

let getOddTenisAverage = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT AVG(ODD_T1) AS maxodd FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_ten.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687'
    and odds_ten.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_ten
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_ten.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687');`,
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
    getOddTenisT1: getOddTenisT1, 
    getOddTenisT2: getOddTenisT2,
    getOddTenisMax: getOddTenisMax,
    getOddTenisMin: getOddTenisMin,
    getOddTenisMaxBet: getOddTenisMaxBet,
    getOddTenisAverage: getOddTenisAverage
}