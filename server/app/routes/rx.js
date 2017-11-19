'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const Rx = models.Rx;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/Rx did I get here?')
    User.findAll({ where: req.query })
        .then(rx => res.json(rx))
        .catch(next);
});

router.get('/:rxid', function (req, res, next) {
    console.log('at rx id search');
    let id = req.params.rxid;
    Rx.findOne({ where: { id: id } })
        .then(Rx => {
            if (Rx !== null) {
                res.status(200).json(Rx)
            }
            else {
                res.status(404).json("Rx not found for this id")
            }
        })
        .catch(next)
})


router.post('/', function (req, res, next) {
    console.log ('at new rx post')
        Rx.create(req.body)
            .then(data => {
                Rx.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let rx = new Rx;
                    rx.id = data2.id;
                    rx.name = data2.name;
                    rx.email = data2.email;
                    let message = "created"
                    res.status(200).json({ message, rx })
                })
            }) // end .then
            .catch(next)
})//end post

// Update a Rx

router.put('/:id', function(req,res, next){
        let id = req.params.id;
        Rx.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            Rx.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                Rx.findOne({where:{id:id}}).then(data3 =>{
                    let rx = new Rx
                    let message = "updated!"
                    res.status(200).json({message, rx})
                })
            })
            .catch(next)
        }) //end find one
    }) //end update user

//delete a user
router.delete('/:id', function(req,res,next){
    let id = req.params.id;
    Rx.destroy({where: {id: id} })
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete