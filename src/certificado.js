const Axios = require("axios");
const FormData = require("form-data");
const Fs = require("fs");
const Path = require("path")
const env = require("../config.js")

require("dotenv/config.js")

  async function returnCertificate() {
    try {
      const url = env.CERTIFY_URL
      const data = new FormData();
      const path = Path.resolve(__dirname, "arquivo", "cert_teste.pfx")

      data.append("arquivo", Fs.createReadStream(path));
      data.append("senha", "123mudar");

      const response = await Axios ({
        url,
        method: "POST",
        data, 
        headers: {
          "x-api-key": env.X_API_KEY,
          ...data.getHeaders()
        },
      })

      console.log(JSON.stringify(response.data))
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  returnCertificate();
