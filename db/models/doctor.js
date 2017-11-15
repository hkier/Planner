'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var Doctor = db.define('doctor', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allownull: true
    },

    email: {
        type: Sequelize.TEXT,
        validate: { isEmail: true },
        allownull: true,
    }
})

module.exports = User
