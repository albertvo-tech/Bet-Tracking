let dbConfig = require("../utilities/mysqlConfig");

let getLeagues = (criteria, callback) => {
    let response;
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`select * from leagues`, criteria, callback);
}

let getLeaguesBySport = (criteria) => {
    connection = dbConfig.getDB();
    connection.connect();
    connection.query(`SELECT league_name FROM leagues, matches WHERE LEAGUE_SPORT_ID = '${criteria.id}'`, criteria, callback);
}

module.exports = {
    getLeagues: getLeagues,
    getLeaguesBySport: getLeaguesBySport
}