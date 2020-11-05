require('dotenv').config();
const client = require('../API/waMailer');
const router = require('express').Router();
const fs = require('fs');

router.post('/qr', (req, res) => {
    try {
        const SESSION_FILE_PATH = '../wa-session.json';

        if (fs.existsSync(SESSION_FILE_PATH)) {
            res.json({ message: 'Action aborted' });
        }
        else {
            if (req.body.username === process.env.SUPER_ADMIN_ID && req.body.password === process.env.SUPER_ADMIN_PASSWORD) {
                client.on('qr', (qr) => {
                    // Generate and scan this code with your phone
                    // console.log('QR Received: ', qr);
                    // qrcode.generate(qr);

                    res.json({ message: qr })
                });
            }
            else {
                res.json({ message: 'User not found' });
            }
        }
    }
    catch (err) {
        console.log(err);
        res.json({ message: 'Error: ' + err.message });
    }
});

module.exports = router;