# Bluebird

Bluebird é uma biblioteca criada para tratamento de erros quando se usam Promises.

Utilizando promises, como ja vimos no ficheiro Promises.md, facilita o programador
 na medida em que o código criado é de fácil compreensão. Mas em funções
 assincronas, torna-se dificil controlar/prever todos os erros ocorridos.

Aí entra Bluebird.


1.
```js

getJSON().then( function( jsonString ){
  return JSON.parse(jsonString );
}).then( function( object ){
  console.log( 'JSON file valid: ' + object );
}).catch( SyntaxError, function( e ){
  console.log( 'Não sejas assim!' );
});


```
No exemplo acima, qualquer erro que apareça é automaticamente reportado para o
 ***stderr*** juntamente com o ***stack trace***. Com o bluebird, é possivel
 apanharmos apenas os erros que queremos, e outros erros que apareçam sao
 redirecionados para um tratamento de erros especifico.



2.
 ```js

 var fs = Promise.promisifyAll( require( "fs" ) );

 fs.readFilesAsync( "myfile.json" )
     .then( JSON.parse )
     .then( function ( json ){
            console.log( 'Json válido!' );
     })
     .catch( SyntaxError, function ( e ){
         console.error( 'Json inválido!' );
     })
     .catch( Promise.OperationalError, function( e ){
         console.error( 'Impossivel ler ficheiro, porque: ' + e.message );
     });

 ```

No exemplo 2, a ultima função *.catch* só irá ser invocada quando o modulo ***fs***
usar o argumento *err* relativo aos callbacks assincronos para informar de um
erro esperado. Bluebird também suporta filtros baseados em predicados. Se passar
uma função em substituição de um erro, a função recebe um erro como argumento.
O retorno da função irá determinar onde o tratamento de erros irá ser chamado.

```js

var Promise = require( 'bluebird' );
var request = Promise.promisify( require( 'request' ) );

function clientError( e ){
    return e.code >= 400 && e.code < 500;
}

request( "http:://www.google.com" )
.then( function( contents ){
    console.log( contents );
})
.catch( clientError, function( e ){
    //Se existir um erro do tipo '400 Bad Request'
});


```
