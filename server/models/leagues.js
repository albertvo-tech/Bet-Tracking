let mysqlConfig = require("../utilities/mysqlConfig");

let initialize = () => {
    mysqlConfig.getDB().query("select * from leagues");
}

module.exports = {
    initialize: initialize
}