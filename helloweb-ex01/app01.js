const http = require("http");

const port = 9090;

const server = http.createServer(function(request, response){
    response.writeHead(200, {
        'Content-type' : 'text/html'
    });

    response.end('<h1>Hello World</h1>');
});

server.listen(9090, function(){
    console.log("http server running on" + port);
});