
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id:1, name: 'Abby', surname: 'Abberforth', email:'abby@email.com', dob: '01/01/2020', username: 'userAbby', password: 'passwordAbby', age: 3},
        {id:2, name: 'Brian', surname: 'Bryant', email:'brian@email.com', dob: '01/01/2021', username: 'userBrian', password: 'passwordBrian', age: 2},
        {id:3, name: 'Charlie', surname: 'Charleston', email:'charlie@email.com', dob: '01/01/2022', username: 'userCharlie', password: 'passwordCharlie', age: 1},
      ]);
    });
};
