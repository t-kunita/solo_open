const {data} = require('../importData/floors.json')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('floors').del()
    await knex('floors').insert(data);
};
