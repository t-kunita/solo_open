// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const FLOOR_TABLE = 'floors';

module.exports = {
    FLOOR_TABLE,
    async find() {
        const result = await knex(FLOOR_TABLE)
        // return result ? result.map(el => el.floor) : []
        return result ? result : []
    },
};
