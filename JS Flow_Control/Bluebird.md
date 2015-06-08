# Bluebird

Bluebird é uma biblioteca criada para tratamento de erros
quando se usam Promises.

Utilizando promises, como ja vimos no ficheiro Promises.md,
facilita o programador na medida em que o código criado é
de fácil compreensão. Mas em funções assincronas, torna-se
dificil controlar/prever todos os erros ocorridos.

Aí entra Bluebird.

```js

getJSON().then( function( jsonString ){
  return JSON.parse(jsonString );
}).then( function( object ){
  console.log( 'JSON file valid: ' + object );
}).catch( SyntaxError, function( e ){
  console.log( 'Não sejas assim!' );
});


```
No exemplo acima, qualquer erro que não seja esperado, é
 automaticamente reportado para o ***stderr*** juntamente
com o ***stack trace***.
