const http = require('http');
http.createServer((req, res) => {
 res.writeHead(200);
 res.end('triggering the webhook build for the auto deploy using docker Image \n');
}).listen(4000, () => console.log('Running on port 4000'));
