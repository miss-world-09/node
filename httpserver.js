const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(`Requested URL: ${req.url}`); // Debugging

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Hi, nice to meet you.</h1> <p>Keep working hard!</p>');
    } 
    else if (req.url === '/about') {  // Ensure exact match with `/about`
        res.statusCode = 200;
        res.end('<h1>Keep going!</h1> <p>We shall meet tomorrow.</p>');
    } 
    else {
        res.statusCode = 404; // Not found
        res.end('<h1>404 Not Found</h1> <p>We will meet again.</p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
