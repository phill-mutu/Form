
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id:1, name: 'Abby', surname: 'Abberforth', email:'abby@email.com', dob: '2020-01-01', username: 'userAbby', password: 'passwordAbby', age: 3},
        {id:2, name: 'Brian', surname: 'Bryant', email:'brian@email.com', dob: '2021-01-01', username: 'userBrian', password: 'passwordBrian', age: 2},
        {id:3, name: 'Charlie', surname: 'Charleston', email:'charlie@email.com', dob: '2022-01-01', username: 'userCharlie', password: 'passwordCharlie', age: 1},
      ]);
    });
};