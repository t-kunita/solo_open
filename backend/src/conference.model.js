// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const {graph} = require('../graph/indexGraph')
const {getAvailableTimeslots, convertToJST} = require('./getAvailableTimeslots')

const CONFERENCE_TABLE = 'conferences';

module.exports = {
    CONFERENCE_TABLE,

    async find(req) {
        // const area = decodeURIComponent(req.query.area)
        // const genre = decodeURIComponent(req.query.genre)
        const building = decodeURIComponent(req.query.building)
        const floor = decodeURIComponent(req.query.floor)
        const people = req.query.people
        const date = decodeURIComponent(req.query.date)

        const query = knex(CONFERENCE_TABLE)
        if (building) query.where('building', '=', building);
        if (floor) query.andWhere('floor', '=', floor);
        if (people) query.andWhere('capacity', '>=', people);

        const result = await query.select('*')

        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() + 1)
        const end = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}T00:00:00.000Z`

        if (result) {
            await Promise.all(result.map(async (el) => {
                const res = await graph("getReservations", el.facilityId, date, end)
                const timeAry = await getAvailableTimeslots(res)
                el.startTime = timeAry[0].start
            }))
        }
        return {data: result ? result : []};
    },
    async post(req) {
        const event = req.body.event
        console.log("🍏サーバでリクエストを受信しました(req.body.event)", event)
    }
};
