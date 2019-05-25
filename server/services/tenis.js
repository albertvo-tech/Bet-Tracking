let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    tenisDAO = require('../DAO/tenisDAO');

/***API to get the tenis odd_T1 */
let getOddTenisT1 = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisT1(criteria, (err, data) => {
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

/***API to get the tenis odd_T2 */
let getOddTenisT2 = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisT2(criteria, (err, data) => {
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

/***API to get the max tenis odd_T1 */
let getOddTenisMax = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisMax(criteria, (err, data) => {
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

/***API to get the min tenis odd_T1 */
let getOddTenisMin = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisMin(criteria, (err, data) => {
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

/***API to get the MaxBet tenis odd_T1 */
let getOddTenisMaxBet = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisMaxBet(criteria, (err, data) => {
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

/***API to get the Average tenis odd_T1 */
let getOddTenisAverage = (data, callback) => {
    async.auto({
        routes: (cb) => {
            tenisDAO.getOddTenisAverage(criteria, (err, data) => {
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
    getOddTenisT1: getOddTenisT1,
    getOddTenisT2: getOddTenisT2,
    getOddTenisMax: getOddTenisMax,
    getOddTenisMin: getOddTenisMin,
    getOddTenisMaxBet: getOddTenisMaxBet,
    getOddTenisAverage: getOddTenisAverage
};