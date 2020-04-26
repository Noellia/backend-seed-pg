exports.up = function(knex) {
    return knex.schema
        .createTable('person', function (table) {
            table.string('id').primary();
            table.string('first_name');
            table.string('last_name');
            table.string('gender');
            table.string('title');
            table.string('university');
            table.string('skill');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('persons');
};
