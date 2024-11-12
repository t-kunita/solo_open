// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const AREA_TABLE = 'targets';

module.exports = {
    AREA_TABLE,
    async find() {
        const result = await knex(AREA_TABLE).distinct('area')
        return result ? result.map(el => el.area) : []
        // return result ? result : []
    },
};
