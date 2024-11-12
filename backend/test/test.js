// const fixtures = require('../src/utils/fixtures');
const config = require('../knexfile')['development'];
const knex = require('knex')(config);
const conferenceModel = require('../src/conference.model');
const CONFERENCE_TABLE = conferenceModel.CONFERENCE_TABLE;

const chai = require('chai');
const chaiHttp = require('chai-http');
const {setupServer} = require('../server.js');

const app = setupServer();
const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /targets ', () => {
    let request;

    before(() => {
        request = chai.request(app).keepOpen();
    });

    after(() => {
        request.close();
    });

    it('targets should return status 200.', async () => {
        const response = await request.get('/targets');
        expect(response).to.have.status(200);
    });

    it('targets should return array ', async () => {
        const response = await request.get('/targets');
        // console.log("🍎🍎🍎🍎data", response.body)
        expect(response.body).to.be.an.instanceOf(Array);
    });

    it('buildings should return status 200.', async () => {
        const response = await request.get('/buildings');
        expect(response).to.have.status(200);
    });

    it('buildings should return array ', async () => {
        const response = await request.get('/buildings');
        // console.log("🍎🍎🍎🍎data", response.body)
        expect(response.body).to.be.an.instanceOf(Array);
    });

    it('floors should return status 200.', async () => {
        const response = await request.get('/floors');
        expect(response).to.have.status(200);
    });

    it('floors should return array ', async () => {
        const response = await request.get('/floors');
        // console.log("🍎🍎🍎🍎data", response.body)
        expect(response.body).to.be.an.instanceOf(Array);
    });
});
