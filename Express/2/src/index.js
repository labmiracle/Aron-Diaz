const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 5678;

const url = "https://mindicador.cl/api/bitcoin";

app.use("/public", express.static("src/public"));

app.get("/btc", (req, res) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const result = data.serie
        .map((element) => {
          return `<li>Date: ${element.fecha.substring(0, 10)} | Value: $${
            element.valor
          }</li>`;
        })
        .join("");

      const htmlResponse = `
        <html>
        <head>
        <title>BTC</title>
        
        <style>
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }
      
        body {
        font-family: "Roboto", sans-serif;
        background-color: rgb(179, 171, 153);
        }
    
        .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        }

        .text {
        text-align: left;
        margin: 1rem 0rem;
        font-size: 2rem;
        font-weight: 600;
        }
      
        #result {
        list-style: none;
        }
      
        #result li {
        margin-bottom: 0.8rem;
        font-size: 1.4rem;
        font-weight: 600;
        }
      
        .btn{
        margin: 0 1rem;
        padding: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        background-color: rgb(255, 255, 255);
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
        margin-bottom: 0.5rem;
        }
  
        .btn:hover{
        text-decoration-line: underline;
        }
  
        .btn .anchor{
        text-decoration: none;
        color: black;
        }
        </style>
        
        </head>
        <body>
        <main class="container">
        <h1 class="text">BITCOIN</h1>
        <button class="btn">
            <a class="anchor" href="/public">HOME</a>
        </button>
        <ul id="result">${result}</ul>
        </main>
        </body>
        </html>
        
    `;

      res.send(htmlResponse);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

// //AJAX

// let url = "https://mindicador.cl/api/bitcoin";

// const getData = new XMLHttpRequest();
// getData.open("GET", url, true);
// getData.send();

// getData.onreadystatechange = function () {
//   if (this.status == 200 && this.readyState == 4) {
//     let data = JSON.parse(this.responseText);
//     console.log(data.serie);

//     let result = document.querySelector("#result");
//     result.innerHTML = "";

//     let count = 0;
//     for (let i of data.serie) {
//       if (count < 12) {
//         result.innerHTML += `
//                 <li>Fecha: ${i.fecha.substring(0, 10)} | Valor:  $${
//           i.valor
//         }</li>
//                 `;
//         count++;
//       } else {
//         break;
//       }
//     }
//   }
// };
