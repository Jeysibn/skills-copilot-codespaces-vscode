// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client. 
// The server should respond to GET requests to the /comments URL. 
// When the server receives a request, it should read the comments.html file and send it to the client.
// If the file does not exist, the server should respond with a 404 status code.

// Use the fs module to read the file and send it to the client
const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    const filePath = path.join(__dirname, 'comments.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000);