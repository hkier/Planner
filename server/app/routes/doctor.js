'use strict';

const express = require('express');
const router = new express.Router();
const models = require('../../../db/models');
const Doctor = models.Doctor;
module.exports = router;

router.get('/', function (req, res, next) {
    console.log('/doctor did I get here?')
    Doctor.findAll({ where: req.query })
        .then(doctor => res.json(doctor))
        .catch(next);
});

router.get('/:doctorid', function (req, res, next) {
    console.log('at doctor id search');
    let id = req.params.doctorid;
    Doctor.findOne({ where: { id: id } })
        .then(doctor => {
            if (doctor !== null) {
                res.status(200).json(doctor)
            }
            else {
                res.status(404).json("Doctor not found for this id")
            }
        })
        .catch(next)
})


router.post('/', function (req, res, next) {
    console.log ('at new doctor post')
        User.create(req.body)
            .then(data => {
                Doctor.findOne({ where: { email: req.body.email } }).then(data2 => {
                    let user = new User;
                    doctor.id = data2.id;
                    doctor.name = data2.name;
                    doctor.email = data2.email;
                    let message = "created"
                    res.status(200).json({ message, doctor })
                })
            }) // end .then
            .catch(next)
})//end post

// Update a user

router.put('/:id', function(req,res, next){
        let id = req.params.id;
        Doctor.findOne({where: {id: id} }).then(data =>{
            data.datavalues.name = req.body.name
            Doctor.update(data.dataValues, {where: {id:id}})
            .then(data2 => {
                Doctor.findOne({where:{id:id}}).then(data3 =>{
                    let doctor = new Doctor
                    let message = "updated!"
                    res.status(200).json({message, doctor})
                })
            })
            .catch(next)
        }) //end find one
    }) //end update user

//delete a user
router.delete('/:id', function(req,res,next){
    let id = req.params.id;
    Doctor.destroy({where: {id: id} })
    .then(()=> res.status(204).end())
    .catch(next);
}) //end delete