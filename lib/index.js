'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var routes = require('./routes');
var path = require('path');
var startDb = require('./db');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/../bin")));

app.use('/api', routes);

app.get('/*', function (req, res, next) {
	return res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 1337;

startDb.then(function () {
	return server.listen(port, function () {
		return console.log('Chillin on Port: ', port);
	});
}).catch(function (error) {
	return console.error(error);
});