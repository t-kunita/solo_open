/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("conferences", function (table) {
        table.increments("id").primary();
        table.string("conferenceName", 64).notNullable();
        table.string("building", 64).notNullable();
        table.string("floor", 64).notNullable();
        table.integer("capacity" ).notNullable();
        table.string("facilityId", 64).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("conferences");
};
