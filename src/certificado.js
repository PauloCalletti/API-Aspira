const Axios = require("axios");
const FormData = require("form-data");
const Fs = require("fs");
const Path = require("path")

  async function returnCertificate() {
    try {
      const url = "https://api.sandbox.plugnotas.com.br/certificado"
      const data = new FormData();
      const path = Path.resolve(__dirname, "arquivo", "cert_teste.pfx")

      data.append("arquivo", Fs.createReadStream(path));
      data.append("senha", "123mudar");

      const response = await Axios ({
        url,
        method: "POST",
        data, 
        headers: {
          "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d",
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