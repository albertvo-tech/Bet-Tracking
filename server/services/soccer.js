let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    soccerDAO = require('../DAO/soccerDAO');

/***API to get the soccer odd_1 */
let getOddSoccer1 = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccer1(criteria, (err, data) => {
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

/***API to get the soccer odd_2 */
let getOddSoccer2 = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccer2(criteria, (err, data) => {
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

/***API to get the soccer odd_X */
let getOddSoccerX = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccerX(criteria, (err, data) => {
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

/***API to get the max soccer odd_1 */
let getOddSoccerMax = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccerMax(criteria, (err, data) => {
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

/***API to get the min soccer odd_1 */
let getOddSoccerMin = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccerMin(criteria, (err, data) => {
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

/***API to get the MaxBet soccer odd_1 */
let getOddSoccerMaxBet = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccerMaxBet(criteria, (err, data) => {
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

/***API to get the average soccer odd_1 */
let getOddSoccerAverage = (data, callback) => {
    async.auto({
        routes: (cb) => {
            soccerDAO.getOddSoccerAverage(criteria, (err, data) => {
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

/***API to get odds */
let getOdds = (data, callback) => {
    async.auto({
        routes: (cb) => {
            let criteria = {
                "sportID": data.sportID,
                "leagueID": data.leagueID,
                "matchID": data.matchID
            }
            soccerDAO.getOdds(criteria, (err, data) => {
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
    getOddSoccer1: getOddSoccer1,
    getOddSoccer2: getOddSoccer2,
    getOddSoccerX: getOddSoccerX,
    getOddSoccerMax: getOddSoccerMax,
    getOddSoccerMin: getOddSoccerMin,
    getOddSoccerMaxBet: getOddSoccerMaxBet,
    getOddSoccerAverage: getOddSoccerAverage,
    getOdds: getOdds
};