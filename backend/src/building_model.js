// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const BUILDING_TABLE = 'buildings';

module.exports = {
    BUILDING_TABLE,
    async find() {
        const result = await knex(BUILDING_TABLE)
        return result ? result : []
    },
};
