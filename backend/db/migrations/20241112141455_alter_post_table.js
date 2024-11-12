/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable("posts", function (table) {
        table.dropColumn("start")
        table.dropColumn("end")
        table.timestamp("startTime").notNullable();
        table.timestamp("endTime").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable("posts", function (table) {
        table.dropColumn("startTime")
        table.dropColumn("endTime")
        table.date("start").notNullable();
        table.date("end").notNullable();
    });
};
