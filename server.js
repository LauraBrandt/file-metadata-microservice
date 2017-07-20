'use strict';

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
        res.sendFile(process.cwd() + "/views/index.html");
    });

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port', port);
});