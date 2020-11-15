require('dotenv').config();
const router = require('express').Router();
const CONFIG = require('../services/config');
const MasterUser = require('../models/masterUser.model');
const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
const client = require('../API/waMailer');

router.get('/', (req, res) => {
    try {
        if (!req.user) {
            res.json({ displayName: null });
        }
        else {
            MasterUser.findById(req.user.id)
                .then((user) => {
                    const authUser = {
                        displayName: user.displayName
                    }
                    res.json({ message: 'ok', authUser: authUser });
                })
                .catch(err => res.status(400).json({ message: 'Error: ' + err }));
        }
    }
    catch (err) {
        console.log(err);
        res.json({ error: 'Error : ' + err.message });
    }
});

module.exports = router;