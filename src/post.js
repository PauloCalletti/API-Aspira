
// import data from "arquivo/data.js";

const data = require("./arquivo/data_empresa.js")
const Axios = require("axios");


const parameters = {

  method: "post",
  url: "https://api.sandbox.plugnotas.com.br/empresa",
  headers: { 
    "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d", 
    "Content-Type": "application/json"
  },
  data : data
};

Axios(parameters)
.then(function (check) {
  console.log(JSON.stringify(check.data));
})
.catch(
   console.error()
);
