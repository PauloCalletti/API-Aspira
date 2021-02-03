const axios = require('axios');
const data = JSON.stringify([{
  "idIntegracao":"XXXYY999",
  "prestador":{
    "cpfCnpj":"59108389000136"
  },
    "tomador":{
      "cpfCnpj":"1111111111111",
      "razaoSocial":"frutas e cia LTDA",
      "inscricaoMunicipal":"8214100099",
      "email":"teste@teste .com.br",
      "endereco":{
        "descricaoCidade":"Maringa",
        "cep":"87020100",
        "tipoLogradouro":"Rua",
        "logradouro":"teste rua",
        "tipoBairro":"zona 3 ",
        "codigoCidade":"4115200",
        "complemento":"sala 01",
        "estado":"PR",
        "numero":"159",
        "bairro":"Centro"
      }
    },
    "servico":[{
      "codigo":"14.10",
      "codigoTributacao":"14.10",
      "discriminacao":"Descrição dos serviços prestados, utilize | para quebra de linha na impressão.",
      "cnae":"7490104",
      "iss":{
        "tipoTributacao":7,
        "exigibilidade":1,
        "aliquota":3
      },
      "valor":{
        "servico":1,
        "descontoCondicionado":0,
        "descontoIncondicionado":0
      }
    }
  ]}
]);

const config = {
  method: 'POST',
  url: 'https://api.sandbox.plugnotas.com.br/nfse',
  headers: { 
    'x-api-key': '2da392a6-79d2-4304-a8b7-959572c7e44d', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})

.catch(
  console.error()
);

