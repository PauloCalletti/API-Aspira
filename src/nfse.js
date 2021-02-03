const data = require("./arquivo/data_nfse.js")

const axios = require("axios");


const config = {
  method: "POST",
  url: "https://api.sandbox.plugnotas.com.br/nfse",
  headers: { 
    "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d", 
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

