require('dotenv').config();
const router = require('express').Router();
const CONFIG = require('../services/config');
const MasterUser = require('../models/masterUser.model');
const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
const client = require('../API/waMailer');

router.get('/', (req, res) => {
    if (!req.user) {
        res.json({ user: null });
    }
    else {
        MasterUser.findById(req.user.id)
            .then((user) => {
                res.json({ user: user });
            })
            .catch(err => res.status(400).json({ message: 'Error: ' + err }));
    }
});

module.exports = router;