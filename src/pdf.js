const Path = require("path")
const Axios = require("axios")
const Fs = require("fs")

   async function download() {
   const url = "https://api.sandbox.plugnotas.com.br/nfse/pdf/60198cb317d172abc2dd934f"
   const path = Path.resolve(__dirname, "arquivo", "pdf.pdf")
   const writer = Fs.createWriteStream(path)

   const response = await Axios({
   url,
   method: "GET",
   headers: {
      "x-api-key": "2da392a6-79d2-4304-a8b7-959572c7e44d"
   },
   responseType: "stream"
   })

   response.data.pipe(writer)

   return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
   });
}
download();