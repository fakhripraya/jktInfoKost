const fs = require('fs');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './API/wa-session.json';
const REQUIRE_PATH = './wa-session.json';
let sessionCfg;

//DELETE wa-session.json untuk wa mailer baru

if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(REQUIRE_PATH);
}

//Whatsapp API
const client = new Client({ puppeteer: { headless: true }, session: sessionCfg });

client.on('qr', (qr) => {
    // SCAN SEBELUM PUBLISH SERVER PRODUCTION
    // Generate and scan this code with your phone
    console.log('QR Received: ', qr);
    qrcode.generate(qr);
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg = session;
    if (!fs.existsSync(SESSION_FILE_PATH)) {
        fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
            if (err) {
                console.error(err);
            }
        });
    }
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessfull
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('Whatsapp API Client is ready!');
});

client.initialize();

module.exports = client;