let dbConfig = require("../utilities/mysqlConfig");

let getOddSoccer1 = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_1 FROM leagues, matches, odds_1x2 
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID= ${criteria.leagueId} 
    and odds_1x2.ODD_MATCH_ID= ${criteria.matchId}
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_1x2.ODD_REC ASC;`,
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

let getOddSoccerX = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_X FROM leagues, matches, odds_1x2 
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID= ${criteria.leagueId} 
    and odds_1x2.ODD_MATCH_ID= ${criteria.matchId}
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_1x2.ODD_REC ASC;`,
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

let getOddSoccer2 = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MATCH_TEAM1_ID,MATCH_TEAM2_ID,ODD_2 FROM leagues, matches, odds_1x2 
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID= ${criteria.leagueId} 
    and odds_1x2.ODD_MATCH_ID= ${criteria.matchId}
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_1x2.ODD_REC ASC;`,
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

let getOddSoccerMax = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_1) AS maxodd FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_1x2.ODD_MATCH_ID=${criteria.matchId};`,
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

let getOddSoccerMin = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT min(ODD_1) AS maxodd FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=${criteria.leagueId} 
    and odds_1x2.ODD_MATCH_ID=${criteria.matchId};`,
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

let getOddSoccerMaxBet = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT MAX(ODD_1) AS maxodd FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_1x2.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687'
    and odds_1x2.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_1x2.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687')
    Order by MATCH_TEAM1_ID,MATCH_TEAM2_ID,odds_1x2.ODD_REC ASC;`,
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

let getOddSoccerAverage = (criteria) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT AVG(ODD_1) AS maxodd FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_1x2.ODD_MATCH_ID=matches.MATCH_ID
    and matches.MATCH_ID='687'
    and odds_1x2.ODD_REC=(SELECT max(ODD_REC) AS maxtime FROM leagues, matches, odds_1x2
    WHERE leagues.LEAGUE_SPORT_ID = '153'
    and leagues.LEAGUE_ID=matches.MATCH_LEAGUE_ID 
    and odds_1x2.ODD_MATCH_ID=matches.MATCH_ID
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
    getOddSoccer1: getOddSoccer1, 
    getOddSoccerX: getOddSoccerX,
    getOddSoccer2: getOddSoccer2,
    getOddSoccerMax: getOddSoccerMax,
    getOddSoccerMin: getOddSoccerMin,
    getOddSoccerMaxBet: getOddSoccerMaxBet,
    getOddSoccerAverage: getOddSoccerAverage
}