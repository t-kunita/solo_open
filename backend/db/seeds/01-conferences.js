const {data} = require('../importData/conferences.json')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('conferences').del()
    await knex('conferences').insert(data);
};
