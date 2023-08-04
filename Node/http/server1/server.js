const http = require("http");

const host = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Bienvenido a mi servidor</h1>");
    res.end();
  } else if (url === "/miraclelab") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>MiracleLab 2023</h1>");
  } else if (url === "/about") {
    res.end("<h1>Sobre nosotros</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Error 404! Pagina no encontrada</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://${host}`);
});
