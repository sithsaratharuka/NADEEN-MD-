const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", //put your session id
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
MODE: process.env.MODE || "private", //private or public
SUDO:"94711451319", //deleted messege recovory number
AUTO_VOICE:"true", //true or false
INBOX_BLOCK:"false",
ANTI_DELETE:"true",
AUTO_REACT:"true"
};
