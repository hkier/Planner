'use strict';

var db = require('../index');
var Sequelize = require('sequelize');

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },

    email: {
        type: Sequelize.TEXT,
        validate: { isEmail: true },
        allownull: false,
    },
    textNumber:{
        type: Sequelize.INTEGER
    }
})

module.exports = User
