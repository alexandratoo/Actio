'use strict';

const auth = require('./auth');
const users = require('./users');
const users = require('./events');
const messages = require('./messages');
const express = require('express'); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

//
// router.use('/auth', auth);
router.use('/users', users);
router.use('/events', events);


module.exports = router;
