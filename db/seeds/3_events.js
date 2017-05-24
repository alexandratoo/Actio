
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
        owner_id: 2,
        event_date: '12-15-2017',
        skill_level: 'beginner',
        event_pic: 'https://www.linkedin.com/in/sammzamm/photo/'},
        {id: 2,
        name: 'Climbing with Rhys',
        cat_id: 4,
        location: '91 Fourmile Canyon Dr, Boulder, CO 80302',
        owner_id: 1,
        event_date: '12-18-2017',
        skill_level: 'master',
        event_pic: 'https://thumbs.dreamstime.com/t/homem-de-neg%C3%B3cios-que-escala-para-o-sucesso-5060844.jpg'},
        {
        id: 3,
        name: 'Golfing with Sean',
        cat_id: 6,
        location: '5706 Arapahoe Ave, Boulder, CO 80303',
        owner_id: 3,
        event_date: '10-10-2017',
        skill_level: 'advanced',
        event_pic: 'https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_336,q_75,w_630/http://res.cloudinary.com/simpleview/image/upload/v1461089435/clients/laurel/Brenda_T_Golf_Shot_Jump_8e086973-952f-4cbb-bf73-dd3e219759c6.jpg'}
      ]);
    }).then(() => {
      return knex.raw("select setval('events_id_seq', (select max(id) from events));")
    });
};
