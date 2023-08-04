const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname);
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(`Directorio actual: ${filePath}`);
      res.end();
      break;
    case "/about.html":
      filePath = path.join(currentDirectory(), "views/about.html");
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.write(`Error: ${err}`);
          return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
    default:
      filePath = path.join(currentDirectory(), "views/404.html");
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.write(`Error: ${err}`);
          return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
  }
});

const currentDirectory = () => {
  console.log("direcotrio actual: ", __dirname);
  return __dirname;
};

fs.readFile("file.txt", "utf8", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log(`Error: ${err}`);
  }
});

currentDirectory();

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
