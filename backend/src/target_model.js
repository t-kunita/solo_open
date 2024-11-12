// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const TARGET_TABLE = 'targets';

module.exports = {
    TARGET_TABLE,
    async find() {
        const result = await knex(TARGET_TABLE)
        return result ? result : []
    },
};
