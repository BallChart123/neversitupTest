'use strict';

const config = require('./config/config')
let app = require('./index');
let http = require('http');

let server;

server = http.createServer(app);
server.listen(config.port || 80);
server.on('listening', function () {
    console.log('Server listening on http://localhost:%d', this.address().port);
});
