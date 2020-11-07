require('dotenv').config();
const passport = require('passport');
const router = require('express').Router();
const google = require('googleapis').google;
const OAuth2 = google.auth.OAuth2;
const CONFIG = require('../services/config');
const MasterUser = require('../models/masterUser.model');
const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
const client = require('../API/waMailer');
const bcrypt = require('bcryptjs');

// custom functions
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

// check existing user middleware
const userExistCheck = (req, res, next) => {
    try {
        MasterUser.findOne({ username: req.body.username })
            .then((doc) => {
                if (doc) {
                    res.json({ error: 'User sudah pernah dibuat' });
                    res.end();
                }
                else {
                    next();
                }
            })
            .catch(err => res.status(400).json({ error: 'Error: ' + err }));
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
};

// auth verification
router.post('/verification', userExistCheck, (req, res) => {
    try {
        let { email, phone, username } = req.body;

        let verificationCode = '';
        for (var i = 0; i < 6; i++) {
            verificationCode += randomIntInc(1, 9).toString();
        }

        if (email !== '') {
            req.session.tempVrfCode = verificationCode;
            let emailTemplate;

            ejs.renderFile(path.join(__dirname, '../emailTemplate/emailVerificationTemplate.ejs'),
                {
                    username: username,
                    verificationCode: verificationCode.toString(),
                    copyrightDate: new Date().getFullYear().toString()
                })
                .then(result => {
                    emailTemplate = result;

                    //antara pake sendgrid atau smtp

                    // let transport = nodemailer.createTransport({
                    //     host: "smtp.mailtrap.io",
                    //     port: 2525,
                    //     auth: {
                    //         user: "978d5f0612f11b",
                    //         pass: "47df14605d450b"
                    //     }
                    // });

                    let transport = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        auth: {
                            user: "tissymobile@gmail.com",
                            pass: "arisajah123"
                        }
                    });

                    const message = {
                        from: 'tissymobile@gmail.com',
                        to: email,
                        subject: 'Verifikasi Akun Yang Anda Daftarkan',
                        html: emailTemplate
                    };
                    transport.sendMail(message, function (err, info) {
                        if (err) {
                            console.log(err);
                            res.json({ error: err.message });
                        } else {
                            res.json({ message: info });
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        error: 'Error Rendering emailTemplate' + err.message
                    });
                });
        }
        else {
            //format phone number to whatsapp format
            req.session.tempVrfCode = verificationCode;
            if (phone.includes('+62')) {
                let phoneStr = phone.substring(1, phone.length);
                client.sendMessage(phoneStr.toString() + '@c.us', 'Kode verifikasi anda : ' + verificationCode);
            }
            else {
                let phoneStr = phone.substring(1, phone.length);
                client.sendMessage('62' + phoneStr.toString() + '@c.us', 'Kode verifikasi anda : ' + verificationCode);
            }

            res.end();
        }
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
});

// auth logout
router.get('/logout', (req, res) => {
    try {
        req.logout();
        res.json({ message: 'Successfully logged out.' });
    }
    catch (err) {
        res.json({ error: 'Error: ' + err.message });
    }
});

// internal auth
router.route('/register').post(async (req, res) => {
    try {
        let { user, verificationCode } = req.body;

        if (verificationCode === req.session.tempVrfCode) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            const newUser = new MasterUser({
                username: user.username,
                password: hashedPassword,
                displayName: user.username,
                email: user.email,
                phone: user.phone,
                age: -1,
                externalProvider: 0,
                RoleId: 0,
                isDelete: false
            });
            await newUser.save();

            req.session.destroy();
            res.json({ message: 'Registrasi sukses' });
        }
        else {
            res.json({ error: 'Kode verifikasi salah' });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
});

router.post('/login', function (req, res, next) {
    try {
        console.log('masuk1');
        passport.authenticate('local', (err, user, info) => {
            console.log('masuk2');
            if (err) {
                console.log(err);
                res.json({ error: 'Error: ' + res.message });
            }
            if (!user) {
                res.json({ error: 'User tidak ditemukan' });
                console.log('masuk3');
            }
            else {
                console.log('masuk4');
                req.logIn(user, err => {
                    if (err) {
                        console.log(err);
                        res.json({ error: 'Error: ' + res.message });
                    }
                    console.log(req.user);
                    res.json({ message: 'Berhasil masuk' });
                })
            }
        })(req, res, next);
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
});

// external auth
router.get('/google', function (req, res) {
    try {
        // Create an OAuth2 client object from the credentials in our config file
        const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
        // Obtain the google login link to which we'll send our users to give us access
        const loginLink = oauth2Client.generateAuthUrl({
            access_type: 'offline', // Indicates that we need to be able to access data continously without the user constantly giving us consent
            scope: CONFIG.oauth2Credentials.scopes // Using the access scopes from our config file
        });
        return res.send(loginLink);
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
});

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    try {
        res.redirect(process.env.FRONTEND_URL + process.env.FRONTEND_PORT + '/');
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error: ' + err.message });
    }
});

module.exports = router;