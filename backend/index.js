require('dotenv').config(); //

const express = require('express');
const conferenceModel = require('./src/conference.model');
const targetModel = require('./src/target_model');
const buildingModel = require('./src/building_model');
const floorModel = require('./src/floor_model');

const app = express();

app.use(express.static("../frontend/dist"));

app.get("/conferences", async (req, res) => {
    try {
        const conferences = await conferenceModel.find(req);
        res.status(200).send(conferences);
    } catch (error) {
        console.log(error);
    }
});

app.get("/targets", async (req, res) => {
    try {
        const targets = await targetModel.find();
        res.status(200).send(targets);
    } catch (error) {
        console.log(error);
    }
});


app.get("/buildings", async (req, res) => {
    try {
        const buildings = await buildingModel.find();
        res.status(200).send(buildings);
    } catch (error) {
        console.log(error);
    }
});

app.get("/floors", async (req, res) => {
    try {
        const floors = await floorModel.find();
        res.status(200).send(floors);
    } catch (error) {
        console.log(error);
    }
});


app.listen(3000, () => {
    console.log(`サーバーが立ち上がりました: http://localhost:3000`)
})
