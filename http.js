const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1>Welcome to our home page</h1>
                <a href="/about">About us</a>`);
    } else if (req.url === "/about") {
        res.end("This is our short history...");
    } else {
        res.end(`<h1>Oops we can't find it</h1>
            <p>You have to go back</p>
            <a href="/">Back home</a>`);
    }
});

server.listen(5000);
