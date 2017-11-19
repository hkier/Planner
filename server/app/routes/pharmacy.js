'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const Pharmacy = models.Pharmacy;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/Pharmacy did I get here?')
    Pharmacy.findAll({ where: req.query })
        .then(pharmacy => res.json(pharmacy))
        .catch(next);
});

router.get('/:pharmacyid', function (req, res, next) {
    console.log('at pharmacy id search');
    let id = req.params.pharmacyid;
    Pharmacy.findOne({ where: { id: id } })
        .then(pharmacy => {
            if (pharmacy !== null) {
                res.status(200).json(pharmacy)
            }
            else {
                res.status(404).json("Pharmacy not found for this id")
            }
        })
        .catch(next)
})


router.post('/', function (req, res, next) {
    console.log ('at new pharmacy post')
        Pharmacy.create(req.body)
            .then(data => {
                Pharmacy.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let pharmacy = new Pharmacy;
                    pharmacy.id = data2.id;
                    pharmacy.name = data2.name;
                    pharmacy.email = data2.email;
                    let message = "created"
                    res.status(200).json({ message, pharmacy })
                })
            }) // end .then
            .catch(next)
})//end post

// Update a pharmacy

router.put('/:id', function(req,res, next){
        let id = req.params.id;
        Pharmacy.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            Pharmacy.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                Pharmacy.findOne({where:{id:id}}).then(data3 =>{
                    let pharmacy = new Pharmacy
                    let message = "updated!"
                    res.status(200).json({message, pharmacy})
                })
            })
            .catch(next)
        }) //end find one
    }) //end update pharmacy

//delete a user
router.delete('/:id', function(req,res,next){
    let id = req.params.id;
    Pharmacy.destroy({where: {id: id} })
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete