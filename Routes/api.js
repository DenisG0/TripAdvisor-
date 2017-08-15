const models = require('../models');
const express = require('express');
const router = express.Router();
const Hotel = models.Hotel;
const Place = models.Place;
const Restaurant = models.Restaurant;
const Activity = models.Activity;
const Promise = require('bluebird')

// console.log("$$$$$$$$",models.Hotel)


router.get('/api', function(req,res,next){
    // res.send("HELLO")
    var hotels = Hotel.findAll({ include: [{ all: true }] });
    // console.log("HOTELS",hotels)
    var places = Place.findAll();
    var restaurants = Restaurant.findAll()
    var activities = Activity.findAll()

    Promise.all([hotels,places,restaurants,activities])
    .then(function(promises){
        res.json(promises)
    })
    .catch(next)
})

module.exports = router;