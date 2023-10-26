const express = require("express");
const config = require('./.env');
const app = require('./controller/app.js');
const port = 8081;

const server = app.listen(port, function(){
    console.log('Web App Hosted at http://localhost:%s', port);
});