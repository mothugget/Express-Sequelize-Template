'use strict';
const router = require('express').Router();
const stuffController = require('./controllers/stuffController');

router.get('/stuff', stuffController.getStuff);
router.post('/stuff', stuffController.postStuff);


module.exports = router;