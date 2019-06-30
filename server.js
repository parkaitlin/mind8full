const createError = require('http-errors')
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const path = require('path')

require('dotenv').config();
require('./db/db');

const userRouter = require('./r&c/routes/userR');
const authRouter = require('./r&c/routes/authR');
const entryRouter = require('./r&c/routes/entryR');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.use(session({
    secret:"random string to protect information",
    resave: false,
    saveUninitialized: false
}));

const corsOptions = {
    origin: "http://localhost:3080", //where the front end is deployed,
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routers
app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/entry', entryRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use((req, res, next)=>{
    next(createError(404, "please login to view this page"));
});


module.exports = app;