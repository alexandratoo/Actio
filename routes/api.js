'use strict';


const index = require('./index'); 
const express = require('express'); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */
router.use('/', index);


module.exports = router;
