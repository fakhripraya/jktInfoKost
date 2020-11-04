const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

//Whatsapp API
const client = new Client({ puppeteer: { headless: true } });
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR Received: ', qr);
    qrcode.generate(qr);
});

client.on('ready', () => {
    console.log('Whatsapp API Client is ready!');
});

client.initialize();

module.exports = client;