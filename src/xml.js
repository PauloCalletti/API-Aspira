const Path = require("path")
const Axios = require("axios")
const Fs = require("fs")

require("dotenv/config.js")

   async function download() {
   const url = (process.env.XML_URL)
   const path = Path.resolve(__dirname, "arquivo", "xml.xml")
   const writer = Fs.createWriteStream(path)

   const response = await Axios({
   url,
   method: "GET",
   headers: {
      "x-api-key": (process.env.X_API_KEY),
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
