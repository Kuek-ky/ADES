const express = require('express');
const app = express();
app.use(router);

//POST calculate horoscope
router.post('/horoscope/calculateHoroscope', function(req, res){

});

//GET HOROSCOPE DETIALS
router.get('/horoscope/getHoroscope', function(req, res){

});

//UPDATE HOROSCOPE DETAILS
router.put('/horoscope/updateHoroscope', function(req, res){

});

module.exports = app