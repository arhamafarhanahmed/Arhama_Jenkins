const http = require('http');
http.createServer((req, res) => {
 res.writeHead(200);
 res.end('Auto trigerring the webhook Jenkins adn docker \n');
}).listen(4000, () => console.log('Running on port 4000'));
