'use strict';

const index = require('./index');
const users = require('./users');
const map = require('./map');
const express = require('express'); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */
router.use('/', index);
router.use('/users', users)
router.use('/map', map)

module.exports = router;
