
const Axios = require("axios")
const env = require("../config.js")

require("dotenv/config.js")

async function downloadXml(id) {
   try {
      const URL = env.URL_PLUG
      const KEY = env.X_API_KEY
      const response = await Axios({
      url: `${URL}/nfse/xml/${id}`,
      method: "GET",
      headers: {
         "x-api-key": `${KEY}`
      },
      responseType: "stream"
      })

      return response.data
   }
   catch(error){
      throw new Error(error)
   }
}
module.exports = downloadXml;
