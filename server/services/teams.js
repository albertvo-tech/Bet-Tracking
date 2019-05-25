let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    teamsDAO = require('../DAO/teamsDAO');

/***API to get the local teams */
let getTeamsLocal = (data, callback) => {
    async.auto({
        routes: (cb) => {
            teamsDAO.getTeamsLocal(criteria, (err, data) => {
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

/***API to get the away teams */
let getTeamsAway = (data, callback) => {
    async.auto({
        routes: (cb) => {
            teamsDAO.getTeamsAway(criteria, (err, data) => {
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

/***API to get the NO LO SE */
let getTeamsNOLOSE = (data, callback) => {
    async.auto({
        routes: (cb) => {
            teamsDAO.getTeamsNOLOSE(criteria, (err, data) => {
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

module.exports = {
    getTeamsLocal: getTeamsLocal,
    getTeamsAway: getTeamsAway,
    getTeamsNOLOSE: getTeamsNOLOSE
};