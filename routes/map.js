'use strict';

const express = require('express');
const knex = require('../knex.js');
const router = express.Router();
router.get('/', function(req, res, next) {
 res.send(200);
});

module.exports = router;
