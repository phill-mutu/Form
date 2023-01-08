
exports.up = (knex) => {
  return knex.schema.createTable('students', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('surname')
    t.string('email')
    t.string('dob')
    t.string('username')
    t.string('password')
    t.integer('age')
  })
};

exports.down = (knex) => {
  return knex.schema.dropTable('students')
};
