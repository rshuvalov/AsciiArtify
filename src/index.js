const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Version: ${process.env.APP_VERSION}`);
  })
  .listen(3000, () => console.log('Server running on port 3000'));