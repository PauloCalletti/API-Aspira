const empresa = require("./arquivo/data_empresa.js")
const Axios = require("axios");
const env = require("../config.js")

require("dotenv/config.js")

async function postEmpresa(){
  try {
    const response = await Axios ({

      method: "post",
      url: env.POST_URL,
      headers: { 
        "x-api-key": env.X_API_KEY,
        "Content-Type": "application/json"
      },
      data : empresa
    });
    console.log(JSON.stringify(response.data))
    return response.data
  }
  catch(error){
    console.error(error);
  }
}
postEmpresa();
