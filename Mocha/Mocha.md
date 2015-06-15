# Mocha

Mocha é uma libraria de testes para os programadores de JavaScript.
Vou dar alguns exemplos de como utilizar a libraria.
```bash
#instala o mocha no sistema
npm i mocha
```

Imaginemos que temos o seguinte código no ficheiro **Index.js**

```js
function primo( n ){
    var smaller = 0;
    n = Math.floor( n );

    if( n>=2 ){
        smaller = 1;

        while( smaller * smaller <= n ){
            n++;
            smaller = 2;
            while ( ( n % smaller > 0 ) && ( smaller * smaller <= n) ){
                smaller++;
            }
        }
        return n;
    } else {
        return 2;
    }
}

module.exports.primo = primo;
```

O que faz este pedaço de código é retornar numeros primos.

Agora vamos fazer uns testesitos nele para ver se está tudo certo, o código fica
no diretorio /test/test.js.

```js
var assert = require( 'assert' ),
    primo = require( './index.js');

suite( 'primo', function(){
    test( 'deve retornar o próximo numero primo', function(){
        assert.equal( 11, primo( 7 ) );
    });

    test( 'zero e um nao sao numeros primos', function(){
        assert.equal( 2, primo( 0 ) );
        assert.equal( 2, primo( 1 ) );
    });
});

```
