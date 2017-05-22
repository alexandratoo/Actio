'use strict';

const index = require('./index');
// const auth = require('./auth');
// const users = require('./users');
const express = require('express'); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

router.use('/', index);
//
// router.use('/auth', auth);
// router.use('/users', users);
// router.use('/events', events);


module.exports = router;
