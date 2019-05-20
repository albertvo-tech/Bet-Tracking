let dbConfig = require("../utilities/mysqlConfig");

let getLeagues = () => {
    dbConfig.getDB().query(`select * from leagues`);
}

module.exports = {
    getLeagues: getLeagues
}