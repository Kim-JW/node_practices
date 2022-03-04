const express = require('express');

const router = express.Router();

router.route('/02').get(function(req, resp){
    const data = {
        no: req.query.no || '',
        email : req.query.email || ''
    };
    
    resp.render('hello/02', data);

    // console.log("!!!");
    // resp.writeHead(200, {
    //     'Content-type' : 'text/html'
    // });
    // resp.end("<h1>/hello/01</h1>");  
});

module.exports = router;