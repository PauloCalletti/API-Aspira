const Axios = require("axios");
const env = require("../config.js")

require("dotenv/config.js")

async function postNfse(data_nfse) {
   try {
      const URL = env.URL_PLUG
      const KEY = env.X_API_KEY
      const response = await Axios ({
      method: "POST",
      url: `${URL}/nfse`,
      headers: { 
         "x-api-key": `${KEY}`, 
         "Content-Type": "application/json"
      },
      data : `${data_nfse}`,
      })
  
   return response.data
   }
   catch(error){
      throw new Error(error)
   }
}

module.exports = postNfse;
