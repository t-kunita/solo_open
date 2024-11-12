/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("posts", function (table) {
        table.increments("id").primary();
        table.string("subject", 64).notNullable();
        table.date("start", 64).notNullable();
        table.date("end", 64).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("posts");
};
