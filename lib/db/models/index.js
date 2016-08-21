'use strict';

var mongoose = require('mongoose');

var url = new mongoose.Schema({
	url: { type: String, required: true },
	madeupUrl: { type: String, required: true },
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Url', url);