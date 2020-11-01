/*START*/
/*---------------------------------------------------APPLICATION SETTINGS---------------------------------------------------*/
//---------------------------------------------------EXPRESS REGION---------------------------------------------------

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
expressSession = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//CORS Middleware
var corsMiddleware = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL + process.env.FRONTEND_PORT);
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
}

//main
app.use(express.json());
app.use(corsMiddleware);

//initialize Mongodb and MongoStore
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Database MongoDB berhasil tersambung")
})

const MongoStore = require('connect-mongo')(expressSession);

//creating cookie session
app.use(
    expressSession({
        store: new MongoStore({
            mongooseConnection: connection,
            collection: 'dbSessions'
        }),
        secret: process.env.SESSION_SECRET,
        name: process.env.SESSION_NAME,
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000
        }
    })
);
app.use(cookieParser(process.env.SESSION_SECRET));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport-setup')(passport);

//---------------------------------------------------END OF EXPRESS REGION---------------------------------------------------


//---------------------------------------------------ROUTE SETTINGS---------------------------------------------------

//Route list
const authRouter = require('./routes/authRoute');
const itemsRouter = require('./routes/itemsRoute');
const baseUsersRouter = require('./routes/usersRoute');

//Url routes
app.use('/auth', authRouter);
app.use('/items', itemsRouter);
app.use('/users', baseUsersRouter);

//---------------------------------------------------END OF ROUTE SETTINGS---------------------------------------------------
/*---------------------------------------------------END OF APPLICATION SETTINGS---------------------------------------------------*/

/*---------------------------------------------------APPLICATION START---------------------------------------------------*/

app.listen(port, () => {
    console.log(`Server berjalan di port: ${port}`)
});

/*---------------------------------------------------END OF APPLICATION START---------------------------------------------------*/
/*END*/