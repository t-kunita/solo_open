/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("targets", function (table) {
        table.increments("id").primary();
        table.string("area", 64).notNullable();
        table.string("genre", 64).notNullable();
        table.text("url", 64);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("targets");
};
