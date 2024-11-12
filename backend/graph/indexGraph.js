#!/usr/bin/env node

// read in env settings
require("dotenv").config();

// const yargs = require("yargs");

const fetch = require("./fetch");
const auth = require("./auth");

async function graph(mode, facilityId, start, end) {

    // switch (yargs.argv["op"]) {
    switch (mode) {
        case "getUsers":
            try {
                const authResponse = await auth.getToken(auth.tokenRequest);

                const users = await fetch.callApi(
                    auth.apiConfig.uri,
                    authResponse.accessToken
                );
                // console.log(users);
            } catch (error) {
                console.log(error);
            }

            break;
        // add by kunita
        case "getReservations":
            try {
                const authResponse = await auth.getToken(auth.tokenRequest);
                const reservations = auth.apiConfigReservation(
                    facilityId,
                    start,
                    end
                );

                const infos = await fetch.callApi(
                    reservations.uri,
                    authResponse.accessToken
                );

                const reservedInfo = [];
                infos.value.map((el) => {
                    reservedInfo.push({
                        subject: el.subject,
                        start: el.start.dateTime,
                        end: el.end.dateTime,
                        isAllDay: el.isAllDay,
                        location: el.location.displayName,
                        organizer: el.organizer.emailAddress.address,
                        facilityId
                    });
                });

                return reservedInfo
            } catch (error) {
                console.log(error);
            }
            break;

        default:
            break;
    }
}

module.exports = {graph};  // graph 関数をエクスポート
// graph();
