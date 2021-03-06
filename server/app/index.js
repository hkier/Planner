'use strict';
var path = require ('path');
var express = require ('express');
var app = express();
module.exports = app;

require('./configure')(app);

app.use('/api', require('/routes'));

app.get('/*', function (req, res) {
    res.sendFile(app.get('../../public/index.html'));
});