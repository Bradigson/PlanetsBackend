const express = require('express');
const mongoose = require('mongoose');

const planetsController = require('../controllers/planets.controller');

const router = express.Router();

router
.get('/planets', planetsController.allPlanets)
.post('/add_planets', planetsController.addPlanets)

module.exports = router;