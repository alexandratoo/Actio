'use strict';

const express = require('express');
const router = express.Router();

//get

router.get('/', (req, res, next) => {
  return knex('categories')
  .returning('*')
  .orderBy('title', 'asc')
  .then((categories) => res.json(categories))
  .catch((err) => next(err));
});

module.exports = router
