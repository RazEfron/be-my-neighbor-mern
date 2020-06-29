const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Certifaicate Setup

const key = fs.readFileSync('./config/certkey/privateKey.key');
const cert = fs.readFileSync('./config/certkey/certificate.crt');

//  Load env file

dotenv.config({path: './config.env'});

// 