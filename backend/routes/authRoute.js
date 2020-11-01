require('dotenv').config();
const OAuth2 = google.auth.OAuth2;
const passport = require('passport');
const router = require('express').Router();
const google = require('googleapis').google;
const CONFIG = require('../services/config');
const MasterUser = require('../models/masterUser.model');

// get user
router.get('/', (req, res) => {
    try {
        if (!req.user) {
            res.json({ user: null, userInit: null });
        }
        else {
            MasterUser.findById(req.user.id)
                .then((user) => {
                    const username = user.username;
                    let userInitial = username.match(/\b(\w)/g);;
                    userInitial = userInitial.join('');

                    res.json({ user: user, userInit: userInitial });
                })
                .catch(err => res.status(400).json({ message: 'Error: ' + err }));
        }
    }
    catch (err) {
        res.json({ message: 'Error: ' + err.message });
    }
});

// auth verification

router.get('/verif', (req, res) => {
    try {
        req.logout();
        res.json({ message: 'Successfully logged out.' });
    }
    catch (err) {
        res.json({ message: 'Error: ' + err.message });
    }
});

// auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    try {
        req.logout();
        res.json({ message: 'Successfully logged out.' });
    }
    catch (err) {
        res.json({ message: 'Error: ' + err.message });
    }
});

// internal auth
router.route('/register').post((req, res) => {
    MasterUser.findOne({
        username: req.body.username
    }, async (err, doc) => {
        if (err) res.json({ message: 'Error: ' + res.message });
        if (doc) res.json({ message: 'User sudah pernah dibuat' });
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new MasterUser({
                username: req.body.username,
                password: hashedPassword,
                externalId: 'None',
                externalProvider: 0,
                RoleId: 0,
                isDelete: false
            });
            await MasterUser.save();
            console.log('User: ' + newUser.username + ' berhasil dibuat');
        }
    })
});

router.get('/login', function (req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) res.json({ message: 'Error: ' + res.message });
        if (!user) res.json({ message: 'User tidak ditemukan' });
        else {
            req.logIn(user, err => {
                if (err) res.json({ message: 'Error: ' + res.message });
                res.json({ message: 'Berhasil masuk' });
                console.log(req.user);
            })
        }
    })(req, res, next);
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
        res.json({ message: 'Error: ' + err.message });
    }
});

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    try {
        res.redirect(process.env.FRONTEND_URL + process.env.FRONTEND_PORT + '/');
    }
    catch (err) {
        res.json({ message: 'Error: ' + err.message });
    }
});

module.exports = router;