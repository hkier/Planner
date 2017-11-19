'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const User = models.User;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/user did I get here?')
    User.findAll({ where: req.query })
        .then(user => res.json(user))
        .catch(next);
});

router.get('/:userid', function (req, res, next) {
    console.log('at user id search');
    let id = req.params.userid;
    User.findOne({ where: { id: id } })
        .then(user => {
            if (user !== null) {
                res.status(200).json(user)
            }
            else {
                res.status(404).json("User not found for this id")
            }
        })
        .catch(next)
})


router.post('/', function (req, res, next) {
    console.log ('at new user post')
        User.create(req.body)
            .then(data => {
                User.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let user = new User;
                    user.id = data2.id;
                    user.name = data2.name;
                    user.email = data2.email;
                    let message = "created"
                    res.status(200).json({ message, user })
                })
            }) // end .then
            .catch(next)
})//end post

// Update a user

router.put('/:id', function(req,res, next){
        let id = req.params.id;
        User.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            User.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                User.findOne({where:{id:id}}).then(data3 =>{
                    let user = new User
                    let message = "updated!"
                    res.status(200).json({message, user})
                })
            })
            .catch(next)
        }) //end find one
    }) //end update user

//delete a user
router.delete('/:id', function(req,res,next){
    let id = req.params.id;
    User.destroy({where: {id: id} })
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete