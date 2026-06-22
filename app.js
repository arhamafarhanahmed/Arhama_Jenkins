const http = require('http');
http.createServer((req, res) => {
 res.writeHead(200);
 res.end('arhama farhan se231064\n');
}).listen(4000, () => console.log('Running on port 4000'));
