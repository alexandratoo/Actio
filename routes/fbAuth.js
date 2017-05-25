const express = require('express');
const knex = require('../knex.js');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/', (req,res,next) =>{
  res.sendStatus(200);
})


module.export = router
