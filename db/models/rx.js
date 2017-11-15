'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var Rx = db.define('rx', {
    drug: {
        type: Sequelize.STRING,
        allownull: false
    },
    times: {
        type: Sequelize.INTEGER,
        allownull: false
    },

    originalDate: {
        type: Sequelize.DATE,
        allownull: false
    },
    refills: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    days: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    rxNumber: {
        type: Sequelize.TEXT,
        allownull: true
    },
    refillDesired: {
        type: Sequelize.BOOLEAN,
        allownull: false
    },

})

module.exports = Rx
