const express = require('express');
const app = express();
app.use(router);

//GET get user
router.get('/users/getUser', function(req, res){
    res.send('<html><title>user endpoitn testing</body></html>');
    res.end();
});

//POST register user
router.post('/users/registerUser', function(req, res){

});

//POST login user
router.post('/users/loginUser',function(req, res){

})

//UPDATE update user
router.put('/users/updateUser', function(req, res){

});

//DELETE delete user
router.delete('/users/deleteUser', function(req, res){

});

module.exports = app