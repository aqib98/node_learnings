const fs = require('fs');

//server:http.server
const server = require('http').createServer();
const data = {};

server.on('request', (req, res) => {
    switch (req.url) {
        case '/api':
            res.writeHead(200,{'Content-Type':'applicaton/json'});
            res.end(JSON.stringify({data}))
            break;
        case '/home':
        case '/about':
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(fs.readFileSync(`.${req.url}.html`));
            break;
        case '/':
            res.writeHead(301, { 'Location': './home' });
            res.end()
            break;

        default:
            res.writeHead(404);
            res.end();
            break;
    }
});

server.listen(8000)