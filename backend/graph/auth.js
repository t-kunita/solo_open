const msal = require("@azure/msal-node");

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md
 */
const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: process.env.AAD_ENDPOINT + process.env.TENANT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    },
};

/**
 * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
 * The scope is always in the format '<resource-appId-uri>/.default'. For more, visit:
 * https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow
 */
const tokenRequest = {
    scopes: [process.env.GRAPH_ENDPOINT + ".default"], // e.g. 'https://graph.microsoft.com/.default'
};

const apiConfig = {
    uri: process.env.GRAPH_ENDPOINT + "v1.0/users", // e.g. 'https://graph.microsoft.com/v1.0/users'
};
const apiConfigReservation = (roomId, start, end) => {
    return {
        uri:
            process.env.GRAPH_ENDPOINT +
            "v1.0/users/" +
            roomId +
            "/calendarview?StartDateTime=" +
            start +
            "&endDateTime=" +
            end +
            // "&$orderby=start/dateTime&top=10&$select=subject,start,end,body,location,organizer,isAllday,showAs",
            "&$orderby=start/dateTime&top=10&$select=subject,start,end,location,isAllday,organizer",
    };
};

/**
 * Initialize a confidential client application. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
 */
const cca = new msal.ConfidentialClientApplication(msalConfig);

/**
 * Acquires token with client credentials.
 * @param {object} tokenRequest
 */
async function getToken(tokenRequest) {
    return await cca.acquireTokenByClientCredential(tokenRequest);
}

module.exports = {
    apiConfig: apiConfig,
    tokenRequest: tokenRequest,
    getToken: getToken,
    apiConfigReservation,
};