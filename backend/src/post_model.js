// knex のセットアップ
const config = require('../knexfile')['development'];
const knex = require('knex')(config);

const POST_TABLE = 'posts';

module.exports = {
    POST_TABLE,

    async post(req) {
        try {
            const event = req.body
            const insertData = {
                subject: event.subject,
                startTime: new Date(event.start.dateTime),
                endTime: new Date(event.end.dateTime),
                registerTime: new Date()
            }

            console.log("🍏🍏🍏", insertData)
            const result = await knex(POST_TABLE).insert(insertData).returning('*')
            return result ? result : []
            console.log("🍏サーバでリクエストを受信しました(req.body.event)", event)

        } catch (error) {
            console.log('error', error);
        }
    }
};
