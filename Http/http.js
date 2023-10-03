const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Node.js mani!');
})

app.listen(3000, () => {
    console.log(`Server running  on port 3000`);
})