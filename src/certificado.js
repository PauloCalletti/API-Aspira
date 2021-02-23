const Axios = require("axios");
const FormData = require("form-data");
const env = require("../config.js")

require("dotenv/config.js")

async function Certificate({arquivo, senha}) {
   try {
      const data = new FormData();
      const URL = env.URL_PLUG
      const KEY = env.X_API_KEY
      data.append("arquivo", arquivo);
      data.append("senha", senha);
      
      const response = await Axios ({
         
         url: `${URL}/certificado`,
         method: "POST",
         data, 
         headers: {
            "x-api-key": `${KEY}`,
            ...data.getHeaders()
         },
      })

      return response.data
   }
   catch (error) {
      throw new Error(error)
   }
}

module.exports = Certificate;
