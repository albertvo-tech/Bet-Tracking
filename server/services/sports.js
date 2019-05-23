let async = require('async'),
    parseString = require('xml2js').parseString;
let util = require('../utilities/util'),
    sportsDAO = require('../DAO/sportsDAO');

/***API to get the sports list */
let getSports = (data, callback) => {
    async.auto({
        sports: (cb) => {
            sportsDAO.getSports({}, (err, data) => {
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

/***API to get the sport by id */
let getSportsById = (data, callback) => {
    async.auto({
        sports: (cb) => {
            let criteria = {
                "id": data
            }
            sportsDAO.getSportsById(criteria, (err, data) => {
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
    getSports: getSports,
    getSportsById: getSportsById
};