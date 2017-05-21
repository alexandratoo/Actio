exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
        id: 1,
        first_name: 'Rhys',
        last_name: 'Goehring',
        email: 'rhysgoehring@gmail.com',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        zip: 80301,
        profile_pic: 'http://lfsufseq9i2bo0hk2tyezb8b.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/tabphoto-summer-2.jpg'
      }]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};
