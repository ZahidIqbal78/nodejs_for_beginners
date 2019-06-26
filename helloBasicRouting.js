const http = require('http');

// function index (request, response){
//     response.writeHead(200);
//     response.end('Hello, world with basic routing');
// }

http.createServer(function (request, response){
    
    // if(request.url === '/'){
    //     return index(request, response);
    // }

    if(request.url in routes){
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
}).listen(4201);

var routes = {
    '/' : function index(request, response){
        response.writeHead(200);
        response.end('Hello, world with basic routing');
    },
    '/about' : function about (request, response) {
        response.writeHead(200);
        response.end('This is About page from hello world with basic routing');
    }
}