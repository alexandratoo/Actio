exports.seed = function(knex) {
  return knex('messages').del()
    .then(function() {
      return knex('messages').insert([
        {id: 1,
        title: 'My First Message',
        body: "I like swimming",
        event_id: 1
      }]);
    }).then(() => {
      return knex.raw("select setval('messages_id_seq', (select max(id) from messages));")
    });
};
