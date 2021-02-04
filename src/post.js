const data = require("./arquivo/data_empresa.js")
const Axios = require("axios");

require("dotenv/config.js")

const parameters = {

  method: "post",
  url: (process.env.POST_URL),
  headers: { 
    "x-api-key": (process.env.X_API_KEY), 
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
