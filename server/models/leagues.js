let mysqlConfig = require("../utilities/mysqlConfig");

let initialize = () => {
    try{
        mysqlConfig.getDB().query("select * from leagues");
    } catch (err){
        console.log(err);
    }
}

module.exports = {
    initialize: initialize
}