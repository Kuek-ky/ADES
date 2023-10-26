const express = require("express");
const cors = require('cors')
const formData = require('express-form-data');
const config = require('./.env');

let app = express();
app.use('*', cors());

//server settings
const PORT = 5000;
const path = require("path");
const bodyParser = require("body-parser");

//Request Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Express Router
const router = express.Router();
app.use(router);

//Index Page (Home public page)
router.get('/', (req, res, next) => {
    res.send('<html><title>Backend API system for experimenting security concept</title><body>This project provides only backend API support</body></html>');
    res.end();
});

const server = app.listen(port, function(){
    console.log('Web App Hosted at http://localhost:%s', port);
});