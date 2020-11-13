require('dotenv').config();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const MasterUser = require('../models/masterUser.model');
/*COOKIE*/

// Serializing
passport.serializeUser((user, done) => {
    try {
        done(null, user.id);
    }
    catch (err) {
        console.log(err);
    }
});

// Deserializing
passport.deserializeUser((id, done) => {
    try {
        MasterUser.findById(id)
            .then((user) => {
                done(null, user);
            });
    }
    catch (err) {
        console.log(err);
    }
});

/*STRATEGIES*/

//Local
passport.use(
    new LocalStrategy((username, password, done) => {
        try {
            MasterUser.findOne({ username: username }, function (err, user) {
                if (err) {
                    console.log(err);
                }
                if (!user) {
                    return done(null, false);
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    if (result === true) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false);
                    }
                });
            });
        }
        catch (err) {
            console.log(err);
        }
    })
);

//Google
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        try {
            MasterUser.findOne({ username: profile.id, externalProvider: 1 })
                .then((currentUser) => {
                    if (currentUser) {
                        done(null, currentUser);
                    } else {
                        const newUser = new MasterUser({
                            username: profile.id,
                            password: '',
                            displayName: profile.displayName,
                            email: '',
                            phone: '',
                            age: -1,
                            externalProvider: 1,
                            RoleId: 0,
                            isDelete: false
                        }).save()
                        done(null, newUser);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    })
);

//Facebook
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: '/auth/facebook/redirect',
},
    function (accessToken, refreshToken, profile, done) {
        try {
            MasterUser.findOne({ username: profile.id, externalProvider: 2 })
                .then((currentUser) => {
                    if (currentUser) {
                        done(null, currentUser);
                    } else {
                        const newUser = new MasterUser({
                            username: profile.id,
                            password: '',
                            displayName: profile.displayName,
                            email: '',
                            phone: '',
                            age: -1,
                            externalProvider: 2,
                            RoleId: 0,
                            isDelete: false
                        }).save()
                        done(null, newUser);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    }
));