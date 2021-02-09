const Path = require("path")
const Axios = require("axios")
const Fs = require("fs")
const env = require("../config.js")

require("dotenv/config.js")

   async function download() {
   const url = env.PDF_URL
   const path = Path.resolve(__dirname, "arquivo", "pdf.pdf")
   const writer = Fs.createWriteStream(path)

   const response = await Axios({
   url,
   method: "GET",
   headers: {
      "x-api-key": env.X_API_KEY,
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
