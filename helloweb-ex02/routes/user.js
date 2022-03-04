const express = require('express');

const router = express.Router();

router.route('').get(function(req, resp){
    resp.render('user/info', {
        no: req.query.no || 0
    });
});

router.route('/join').get(function(req, resp){
    resp.render('user/join');
});

router.route('/join').post(function(req, resp){
    console.log(req.body);
    resp.redirect("/")
});

router.route('/api').get(function(req, resp){
    vo = {
        no: 10,
        name : '둘리',
        email : 'dooly@gmail.com',
        gender : 'male'
    },
    resp.writeHead(200, {
        'Content-Type' : 'application/json'
    })
    resp.end(JSON.stringify(vo));
});

router.route('/:no').get(function(req, resp){
    resp.render('user/info', {
        no: req.params.no || 0
    });
});

module.exports = router;