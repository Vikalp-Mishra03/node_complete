const http = require('http');

// to create a web server in node.js we must use a method http.createServer()

// the request object can be used to get information about the current HTTP request eg. url, request header, and data
const server = http.createServer((req, res) => {
    res.end('Hello from the other side');
});

server.listen(3, '127.0.0.1', () => {
    console.log('listening to the port no. 3');
});