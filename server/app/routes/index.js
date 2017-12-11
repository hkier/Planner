'use strict';

const router = require('express').Router();
module.exports = router;

router.use('/user', require('./user'));
router.use('/doctor', require('./doctor'));
router.use('/rx', require('./rx'));
router.use('/pharmacy', require('./pharmacy'));
router.use(function(req,res){
    res.status(404).end()
})
