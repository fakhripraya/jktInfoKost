const router = require('express').Router();
let MasterUser = require('../models/masterUser.model');
const bcrypt = require('bcryptjs');

router.route('/').get((req, res) => {
    MasterUser.find()
        .then(Users => res.json(Users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/register').post((req, res) => {
    MasterUser.findOne({
        username: req.body.username
    }, async (err, doc) => {
        if (err) throw err;
        if (doc) console.log("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new MasterUser({
                username: req.body.username,
                password: hashedPassword
            });
            await MasterUser.save();
            console.log("User Created");
        }
    })
});

module.exports = router;