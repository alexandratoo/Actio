'use strict';

const index = require('./index');
const users = require('./users');
const categories = require('./categories');
const messages = require('./messages');
const express = require('express');
const router = express.Router();    /* eslint-enable new-cap */

router.use('/', index);
router.use('/users', users);
router.use('/categories', categories);
router.use('/messages', messages);


module.exports = router;
