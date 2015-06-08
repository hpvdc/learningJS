# XHR

O xhr foi criado para ser usado com o [browserify](http://browserify.org/).
O objetivo é enviar pedidos HTTP/(S) a um servidor web e carregar a ***data***
da resposta para o script.
A ***data*** recebida da resposta pode ser usada para alterar o código do browser
sem ser necessário fazer refresh á página.

```js
var xhr = require('xhr');

xhr( {
    body: someJSONString,
    uri: "/foo",
    headers: {
        "Content-Type": "application/json"
    }
},function( err, resp, body ){
    //verificar resp.statusCode
});

/*
    ############## Resp é um objeto com estes atributos ################
resp = {
    body: Object || String,
    statusCode: Number,
    method: String,
    headers: {},
    url: String,
    rawRequest: xhr
}
*/


```
