const { createServer } = require('node:http');
const { text } = require('node:stream/consumers');
const hostname = '127.0.0.1'; //localhost que también es lo mismo
const port = 3000;

const server = createServer ((req,res) => {
    res.statusCode = 200;
    res.statusCode = 400;
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World');
})

server.lister (port, hostname, () => 
    console.log('server running at http://${/collatz?numero=<valor>}'))