require('../../src/global');

const {Person} = include('/models');
const persons = require('./Persons.json');
exports.seed = async knex => {
    await knex(Person.tableName).del();
    try {
        // eslint-disable-next-line lodash/prefer-lodash-method
        return await Promise.all(persons.map(person => Person.insertOne(person))) ;
    } catch(err) {
        console.log('err: ', err);
    }
};
