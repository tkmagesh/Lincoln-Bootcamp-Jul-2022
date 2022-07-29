
var http = require('http'),
    fs = require('fs');

var server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html'){
        fs.createReadStream('index.html').pipe(res); //sending the index.html to the client as response
    } else if (req.url === '/stream') {
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        setInterval(() => {
            res.write('event: message\n');
            res.write('data: ' + Date() + '\n\n')
        }, 3000);
    }
});

server.listen(9090);
console.log('server listening on 9090')