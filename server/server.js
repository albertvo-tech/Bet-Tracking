let app = require('express')(),
server = require('http').Server(app),
bodyParser = require('body-parser')
express = require('express'),
cors = require('cors'),
http = require('http'),
path = require('path');
let articleRoute = require('./routes/leagues'),
util = require('./utilities/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cors());
app.use(function(err, req, res, next) {
    return res.send({ "statusCode": util.statusCode.ONE, "statusMessage":util.statusMessage.SOMETHING_WENT_WRONG });
});

app.use('/leagues', articleRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next();
});

server.listen(3000,function(){
    console.log('app listening on port: 3000');
});