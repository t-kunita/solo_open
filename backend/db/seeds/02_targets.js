const {data} = require('../importData/targets.json')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('targets').del()
    await knex('targets').insert(data);
};
