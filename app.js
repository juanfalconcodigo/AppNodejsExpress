const http = require('http');
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let jsonData = {
        nombre: 'Juan',
        edad: 22
    }
    res.write(JSON.stringify(jsonData));
    res.end();

}).listen(port);

console.log(`Se le esta escuchando en el puerto ${port}`);