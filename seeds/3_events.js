
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 1,
        name: 'Swim With Sam',
        cat_id: 3,
        location: '2102 Spruce St, Boulder, CO 80302',
        owner_id: 1,
        event_date: '12-15-2017',
        skill_level: 'beginner',
        event_pic: 'https://www.linkedin.com/in/sammzamm/photo/'},
      ]);
    }).then(() => {
      return knex.raw("select setval('events_id_seq', (select max(id) from events));")
    });
};
