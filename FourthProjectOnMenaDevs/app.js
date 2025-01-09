const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //part 1

  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.write("<h1>Welcome In My API</h1>");
  //   res.end();

  //part 2
  fs.readFile("./contactus.html", (err, contactUsData) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" }); // plain => text
      res.end("Internal Server Error");
      console.log(err);
    } else {
      fs.readFile("./myFile.txt", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          console.log(err);
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(contactUsData);
          res.end(`<h2>${data}</h2>`);
        }
      });
    }
  });
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`The Server is Now Running on http://${host}:${port}`);
});
