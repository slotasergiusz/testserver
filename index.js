const http = require('http');
var url = require('url');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query);


res.statusCode = 205;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ' + query.name + '\n');
})
;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
;