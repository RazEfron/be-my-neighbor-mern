const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

// Certifaicate Setup
const key = fs.readFileSync('./config/certkey/privateKey.key');
const cert = fs.readFileSync('./config/certkey/certificate.crt');

//  Load env file
dotenv.config({path: './config.env'});

//  Load Database Connection
const db = require("./config/keys").MongoURI;

// Connect Port to mongo DB online
mongoose.connect(db, {
    useFindAndModify: false, 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err))

//  EJS
app.use(expressEjsLayouts);
app.set("view engine", "ejs")

//  Routes
app.use("/", require("./router/index"));
app.use("/users", require("./router/users"));

//  Server Ports
const PORT = process.env.PORT || 9000;

let Server
if (process.env.NODE_ENV === 'development') {
    Server = https.createServer({key: key, cert: cert}, app);
} else {
    Server = app
}

Server.listen(PORT, () => {
    console.log(
        `Server is running at ${process.env.NODE_ENV} made on port ${PORT}`
    )
})