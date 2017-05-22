'use strict';

const express = require('express');         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post('/', (req, res, next) => {
  const newEvent = req.body;
  db.createEvent(newEvent)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(/:id, (req, res, next) => {
  const id = req.params.id;
  db.readEvent(id)
  .first()
  .then((posture) => res.json(posture))
  .catch((err) => next(err));
});

/* UPDATE */
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;

  db.updateEvent(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  db.deleteEvent(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listEvents()
  .then((postures) => res.json(postures))
  .catch((err) => next(err));
});

module.exports = router;
