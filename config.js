require('dotenv').config

const env = process.env

url: env.URL_PLUG;
xkey: env.X_API_KEY; 
password: {
   senha: env.CERT_PASSWORD
}

module.exports = env;
