const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const dbconnect = require("../config/databaseConfig");
var verifyToken = require('../auth/auth.js');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

//Request Parsing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(urlencodedParser);

//Express Router
const router = express.Router();
app.use(router);

//Index Page (Home public page)
router.get('/', function(req, res) {
    res.send('<html><title>Backend API system for experimenting security concept</title><body>This project provides only backend API support</body></html>');
    res.end();
});

module.exports = app;