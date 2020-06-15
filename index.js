'use strict';

var express = require('express')
var bodyParser = require('body-parser')

var options, app;
options = {
  onconfig: function (config, next) {
    next(null, config);
  }
};


app = module.exports = express();

app.use(bodyParser.json({
  parameterLimit: 100000,
  limit: '50mb',
  type: 'application/json',
  extended: true
}));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, username");
  response.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  next();
});

app.on('start', function () {
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', app.get('env:env'));
});

