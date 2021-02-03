const Axios = require('axios');
const data = JSON.stringify({
   "cpfCnpj":"87920188000174",
   "inscricaoMunicipal":"4781592360",
   "inscricaoEstadual":"2365914870",
   "razaoSocial":"calletti",
   "nomeFantasia":"callett",
   "certificado":"5af59d271f6e8f409178fbf3",
   "simplesNacional":true,"regimeTributario":1,
   "incentivoFiscal":true,
   "incentivadorCultural":true,
   "regimeTributarioEspecial":5,
   "endereco":{
      "tipoLogradouro":"Avenida",
      "logradouro":"Duque de Caxias",
      "numero":"882",
      "complemento":"17 andar",
      "tipoBairro":"Zona",
      "bairro":"Zona 01",
      "codigoPais":"1058",
      "descricaoPais":"Brasil",
      "codigoCidade":"4115200",
      "descricaoCidade":"Maringá",
      "estado":"PR","cep":"87020025"
   },
   "telefone":{
      "ddd":"44",
      "numero":"30379500"
   },
   "email":"empresa@plugnotas.com.br",
   "nfse": {
      "ativo":true,
      "tipoContrato":0,
      "config":{
         "producao":true,
         "rps":{
            "serie":"RPS",
            "numero":1,
            "lote":1
         },
         "prefeitura":{
            "login":"teste",
            "senha":"teste123"
         },
         "email":{
            "envio":true
         }
      }
   },
   "nfe":{
      "ativo":true,
      "tipoContrato":0,
      "config":{
         "producao":true,
         "impressaoFcp":true,
         "impressaoPartilha":true,
         "serie":1,
         "numero":1,
         "dfe":{
            "ativo":true
         },
         "email":{
            "envio":true
         }
      }
   },
   "nfce":{
      "ativo":true,
      "tipoContrato":0,
      "config":{
         "producao":true,
         "serie":1,
         "numero":1,
         "email":{
            "envio":true
         },
         "sefaz":{
            "idCodigoSegurancaContribuinte":"string",
            "codigoSegurancaContribuinte":"string"
         }
      }
   }
});

const parameters = {

  method: 'post',
  url: 'https://api.sandbox.plugnotas.com.br/empresa',
  headers: { 
    'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d', 
    'Content-Type': 'application/json'
  },
  data : data
};

Axios(parameters)
.then(function (check) {
  console.log(JSON.stringify(check.data));
})
.catch(
   console.error()
);
