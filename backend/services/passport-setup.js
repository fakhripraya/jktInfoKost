require('dotenv').config();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const MasterUser = require('../models/masterUser.model');

/*COOKIE*/

// Serializing
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserializing
passport.deserializeUser((id, done) => {
    MasterUser.findById(id)
        .then((user) => {
            done(null, user);
        });
});

/*STRATEGIES*/

//Local
passport.use(
    new LocalStrategy((username, password, done) => {
        MasterUser.findOne({ username: username }, function (err, user) {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
            });
        });
    })
);

//Google
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {

        MasterUser.findOne({ externalId: profile.id, externalProvider: 1 })
            .then((currentUser) => {
                if (currentUser) {
                    console.log('user al created');
                    done(null, currentUser);
                } else {
                    new MasterUser({
                        username: profile.displayName,
                        externalId: profile.id,
                        externalProvider: 1,
                        isDelete: false
                    }).save()
                        .then((newUser) => {
                            console.log('New user created: ' + newUser.username)
                        });
                    done(null, newUser);
                }
            })
    })
);