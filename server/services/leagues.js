let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    leaguesDAO = require('../DAO/leaguesDAO');

/***API to get the leagues list */
let getLeagues = (data, callback) => {
    async.auto({
        routes: (cb) => {
            leaguesDAO.getLeagues({}, (err, data) => {
                if (err) {
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response);
    })
}

/***API to get the leagues by sport */
let getLeaguesBySport = (data, callback) => {
    async.auto({
        leagues: (cb) => {
            let criteria = {
                "id": data
            }
            leaguesDAO.getLeaguesBySport(criteria, (err, data) => {
                if (err) {
                    console.log(err, 'error----');
                    cb(null, { "errorCode": util.statusCode.INTERNAL_SERVER_ERROR, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.article);
    })
}

module.exports = {
    getLeagues: getLeagues,
    getLeaguesBySport: getLeaguesBySport
};