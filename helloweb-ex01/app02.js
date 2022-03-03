const http = require("http");
const fs = require('fs');
const port = 9090;

const server = http.createServer(function(request, response){
    console.log(request.url);

    if(request.url === '/') {
        request.url = '/index.html';
    }

    fs.readFile(__dirname + '/public' + request.url, function(error, data){
        response.writeHead(200, {
            'Content-type' : 'text/html'
        });
        response.end(data);    
    });
});

server.listen(9090, function(){
    console.log("http server running on " + port);
});