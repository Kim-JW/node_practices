const connect = require("connect");
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 9090;
const app = connect();

app.use(connectRoute(function(router){
    router.get("/", function(request, response){
        response.writeHead(200, {
            'Content-type' : 'text/html'
        });
        response.end("<h1>Main</h1>");  
    });

    router.get("/user", function(request, response){
        response.writeHead(200, {
            'Content-type' : 'text/html'
        });
        response.end("<h1>User</h1>");  
    });
}));

app.use(serveStatic(__dirname + "/public"));
app.listen(9090, function(){
    console.log("http server running on " + port);
});