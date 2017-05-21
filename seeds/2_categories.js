
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1,
        title: 'basketball'
        },
        {id: 2,
        title: 'hiking'
        },
        {id: 3,
        title: 'swimming'
        }
      ]);
    }).then(() => {
      return knex.raw("select setval('categories_id_seq', (select max(id) from categories));")
    });
};
