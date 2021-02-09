const nfse = require("./arquivo/data_nfse.js")
const Axios = require("axios");
const env = require("../config.js")

require("dotenv/config.js")

async function postNfse() {
  try {
    const response = await Axios ({
    method: "POST",
    url: env.NFSE_URL,
    headers: { 
      "x-api-key": env.X_API_KEY, 
      "Content-Type": "application/json"
    },
    data : nfse,
    })
  
    console.log(JSON.stringify(response.data))
    return response.data
  }
  catch(error){
    console.error(error)
  }
}

postNfse();
