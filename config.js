require('dotenv').config

const env = process.env

post:{
   url:env.POST_URL
   headers: {
      x_api_key: env.X_API_KEY
   }
}
certificado:{
   url:env.CERTIFICADO_URL
   headers: {
      x_api_key: env.X_API_KEY
   }
}
nfse:{
   url:env.NFSE_URL
   headers: {
      x_api_key: env.X_API_KEY
   }
}
pdf:{
   url:env.PDF_URL
   headers: {
      x_api_key: env.X_API_KEY
   }
}
xml:{
   url:env.XML_URL
   headers: {
      x_api_key: env.X_API_KEY
   }
}
password: {
   senha: env.CERT_PASSWORD
}
module.exports = env;