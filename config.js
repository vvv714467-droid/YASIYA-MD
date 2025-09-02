const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~5FRHGZDa#aufVfb41A8RTkzpLE40Wu9nxkb0sP4Zyl2j_rVhZD68'
};
