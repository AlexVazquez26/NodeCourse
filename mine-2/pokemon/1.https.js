const http = require('node:http');
//para mas info de este proceso ir a "C:\Users\vazale\OneDrive - Watlow\Documentos\Node.js Course\curso-node-js\mine\mjs\10.freeport-excersice.js"
const fs = require('node:fs');
const desiredPort = process.env.PORT ?? 1234;

const procesRequest = (req, res) => {
  console.log('Request received', req.url);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('<h1>Welcome Here!</h1>');
  } else if (req.url === '/contacto') {
    res.statusCode = 200;
    res.end('<h1>Contacto</h1>');
  } else if (req.url === '/epic.jpg') {
    fs.readFile('./epic.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('<h1>500 Internal Server Error</h1>');
      }
      res.setHeader('Content-Type', 'image/jpeg');
      res.statusCode = 200;
      res.end(data);
    });
  } else {
    res.statusCode = 404; //not found
    res.end('<h1>404 not found</h1>');
  }
};

const server = http.createServer(procesRequest);

server.listen(desiredPort, () => {
  console.log(`Server listening on http://localhost:${desiredPort}`);
});
