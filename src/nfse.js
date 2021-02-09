 const data = require("./arquivo/data_nfse.js")
const axios = require("axios");

//TODO: Externalizar o config
//TODO: Colocar o conteudo em uma função
//TODO: Simplificar o data: data
//TODO: Usar async/await ao invés de promises
//TODO: Remover pdf e xml do repo

require("dotenv/config.js")

const config = {
  method: "POST",
  url: (process.env.NFSE_URL),
  headers: { 
    "x-api-key": (process.env.X_API_KEY), 
    "Content-Type": "application/json"
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})

.catch(
  console.error()
);

