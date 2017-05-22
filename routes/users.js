'use strict';

const knex = require('../knex.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return knex('users')
    .select('*')
    .then((users) => res.json(users))
      .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users')
    .select('*')
    .where('id', id)
    .first()
    .then((user) => res.json(user))
      .catch((err) => next(err));
});

router.post('/', (req, res, next) => {
  const newUser = req.body;
  return knex('users')
    .returning('*')
    .insert(newUsers);
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const editUser = req.body;
  return knex('users')
    .returning('*')
    .where('id', id).update(changes)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users')
  .where('id', id).del()
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

module.exports = router;
