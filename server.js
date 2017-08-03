'use strict';

// Set up app
var express = require('express');
var app = express();
app.use('/public', express.static(process.cwd() + '/public'));

// Use the routes
app.use(require( './routes'));

// Listen
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port', port);
});