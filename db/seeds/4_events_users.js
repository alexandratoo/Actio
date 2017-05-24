exports.seed = function(knex) {
  return knex('events_users').del()
    .then(function() {
      return knex('events_users').insert([{
        id: 1,
        event_id: 1,
        user_id: 1
      },{
        id: 2,
        event_id: 1,
        user_id: 2
      },{
        id: 3,
        event_id: 2,
        user_id: 1
      },{
        id: 4,
        event_id: 2,
        user_id: 3
      },{
        id: 5,
        event_id: 3,
        user_id: 1
      },{
        id: 6,
        event_id: 3,
        user_id: 2
      },
      {
        id: 7,
        event_id: 3,
        user_id: 3
      },
    ]);
    }).then(() => {
      return knex.raw("select setval('events_users_id_seq', (select max(id) from events_users));")
    });
};
