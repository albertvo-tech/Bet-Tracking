let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    basketballDAO = require('../DAO/basketballDAO');

/***API to get the basketball odds */
let getOddBasketballVal = (data, callback) => {
    async.auto({
        routes: (cb) => {
            leaguesDAO.getOddBasketballVal(criteria, (err, data) => {
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

/***API to get the max basketball odd */
let getOddBasketballMax = (data, callback) => {
    async.auto({
        leagues: (cb) => {
            let criteria = {
                "id": data
            }
            leaguesDAO.getOddBasketballMax(criteria, (err, data) => {
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

/***API to get the min basketball odd */
let getOddBasketballMin = (data, callback) => {
    async.auto({
        leagues: (cb) => {
            let criteria = {
                "id": data
            }
            leaguesDAO.getOddBasketballMin(criteria, (err, data) => {
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

/***API to get the MaxBet basketball odd */
let getOddBasketballMaxBet = (data, callback) => {
    async.auto({
        leagues: (cb) => {
            let criteria = {
                "id": data
            }
            leaguesDAO.getOddBasketballMaxBet(criteria, (err, data) => {
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

/***API to get the average basketball odd */
let getOddBasketballAverage = (data, callback) => {
    async.auto({
        leagues: (cb) => {
            let criteria = {
                "id": data
            }
            leaguesDAO.getOddBasketballAverage(criteria, (err, data) => {
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
    getOddBasketballVal: getOddBasketballVal,
    getOddBasketballMax: getOddBasketballMax,
    getOddBasketballMin: getOddBasketballMin,
    getOddBasketballMaxBet: getOddBasketballMaxBet,
    getOddBasketballAverage: getOddBasketballAverage
};