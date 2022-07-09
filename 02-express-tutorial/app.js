const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(`User hit the server`);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Home Page</h1>`);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`${url} not found`);
    res.end();
  }
  //console.log(req.method, " ", req.url);
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.write(`<h1>Home Page</h1>`);
  //   res.end();
});

server.listen(5000);
