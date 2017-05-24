'use strict';

const knex = require('../knex.js');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', (req, res, next) => {
  return knex('users')
    .select('first_name', 'last_name', 'email', 'zip', 'profile_pic')
    .then((users) => res.json(users))
      .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  return knex('users')
    .select('first_name', 'last_name', 'email', 'zip', 'profile_pic')
    .where('id', id)
    .first()
    .then((user) => res.json(user))
      .catch((err) => next(err));
});

router.get('/:id/events',(req,res,next) =>{
  const id = req.params.id;

  return knex('events_users')
    .select('*')
    .where('user_id', id)
    .innerJoin('events','events_users.event_id','events.id')
    .innerJoin('messages','events.id','messages.event_id')
    .then((userEvents) => res.json(userEvents))
    .catch((err) => next(err));
});

router.post('/', (req, res, next) => {
  const newUser = req.body;

  let saltRounds = 8;
  bcrypt.hash(newUser.password, saltRounds)
  .then((hash) =>{
    newUser.hashed_password = hash;
    delete newUser.password
    knex('users')
    .returning('*')
    .insert(newUser)
    .then((data) =>{
      console.log(data)
      delete data.hashed_password;
      res.json(data);
    })
  })

  // return knex('users')
  //   .returning(['first_name', 'last_name', 'email', 'zip', 'profile_pic'])
  //   .insert(newUser)
  //   .then((data) => {
  //     console.log(data)
  //     res.json(data);
  //   })
  //   .catch((err) => next(err));
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const editUser = req.body;
  return knex('users')
    .returning(['first_name', 'last_name', 'email', 'zip', 'profile_pic'])
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
