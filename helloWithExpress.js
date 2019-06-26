const express = require('express');

const app = express();

const port = 4201;

app.get('/', function(request, response){
    response.send('hello, world with express \n');
});

app.listen(port, function(){
    console.log('Server is listening on http://localhost:' + port);
});