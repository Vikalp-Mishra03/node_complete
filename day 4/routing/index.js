const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('Hello from the home side');
    } else if (req.url == "/about") {
        res.end('Hello from about side');
    }
    else if (req.url == "/contact") {
        res.end('Hello from contact side');
    }
    else{
        res.end('404 error page not found')
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on port 3000');
});
