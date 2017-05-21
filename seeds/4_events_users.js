exports.seed = function(knex) {
  return knex('events_users').del()
    .then(function() {
      return knex('events_users').insert([{
        id: 1,
        event_id: 1,
        user_id: 1
      }]);
    }).then(() => {
      return knex.raw("select setval('events_users_id_seq', (select max(id) from events_users));")
    });
};
