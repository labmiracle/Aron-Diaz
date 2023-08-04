
const http = require("http");

const host = "localhost";
const port = 7000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Bienvenido a mi servidor</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>¿Quiénes somos?</h1>");
  } else if (url === "/where") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>¿Dónde estamos?</h1>");
  }else if (url === "/did") {
    res.writeHead(200, { "Content-Type": "text/html;  charset=utf-8" });
      res.end("<h1>¿Qué hacemos?</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>Error 404! Página no encontrada</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://${host}`);
});
