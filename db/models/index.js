'use strict';


const Doctor = require('./doctor');
const Pharmacy = require('./pharmacy');
const Rx = require('./rx');
const User = require('/user');

User.hasMany(Rx);
Rx.belongsTo(User);
Pharmacy.hasMany(Rx);
Rx.belongsTo(Pharmacy);
Doctor.hasMany(Rx);
Rx.belongsTo(Doctor)

module.exports = {
    Doctor: Doctor,
    Pharmacy: Pharmacy,
    Rx: Rx,
	User: User
  };