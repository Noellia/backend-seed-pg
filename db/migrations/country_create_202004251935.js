exports.up = function(knex) {
    return knex.schema
        .createTable('country', function (table) {
            table.string('id');
            table.string('name', 255);
            table.string('code', 2);
            table.string('city', 255);
            table.string('street_name', 255);
            table.string('street_number', 255);
            table.string('idPerson').notNull().references('id').inTable('person');
            table.boolean('deleted');
            table.timestamp('createdAt');
            table.timestamp('updatedAt');
            table.timestamp('deletedAt');
            table.integer('__v');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('countries');
};
