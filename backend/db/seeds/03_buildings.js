const {data} = require('../importData/buildings.json')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('buildings').del()
    await knex('buildings').insert(data);
};
