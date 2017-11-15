'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var Pharmacy = db.define('pharmacy', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },

    phone: {
        type: Sequelize.TEXT,
        allownull: false
    }
})

module.exports = Pharmacy
