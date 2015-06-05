# Promises

As promises vêm simplificar e em muito as coisas. Substituem os callbacks e o
código fica mais intuitivo e fácil de implementar.

As promises representam o resultado duma operação assincrona. Têm 3 estados:
    **pending**: o estado inicial duma promises
    **fulfilled**: representa o estado da promise, quando tudo corre como esperado
    **rejected**: representa o estado da promise quando existe uma falha/erro

Apartir do momento em que uma promise atige um estado( fulfilled/rejected ) é
imutavél, i.e. não é possivel sofrer alterações.

1.
```js

function readJSONSync( filename ){
    return JSON.parse( fs.readFileSync( filename, 'utf8' ) );
};


```

Existem problemas associados a funções sincronas. No exemplo acima, o programa
não vai executar mais nada enquanto o ficheiro não estiver lido, o que pode demorar
algum tempo.


É possivel alterar a função acima e usar de modo assincrono.

2.
```js
function readJSON( filename, callback ){
    fs.readFile( filename, 'utf8', function( err, res ){
        if( err )
            return callback( err );
        callback( null, JSON.parse( res ));
    });
};
```

Mesmo desta maneira, os erros lançados por JSON.parse não são tratados.

3.
```js
function readJSON( filename, callback ){
    fs.readFile( filename, 'utf8', function( err, res ){
        if( err )
            return callback( err );
        try{
            callback( null, JSON.parse( res ));
        } catch( ex ){
            return callback( ex );
        }
        callback( null, res );
    });
};
```

No exemplo 3 já são tratados os erros, mas mesmo assim ainda ficamos com um
callback extra, que pode nunca ser utilizado.

Aqui entram as promises.

4.
```js

function readFile( filename ){
    return new Promise( function( fulfill, reject ){
        readFile( filename, 'utf8' ).done( function( res ){
            try{
                fulfill( JSON,parse( res ) );
            }catch( ex ){
                reject( ex );
            }
        }, reject );
    });
};


```

Para se retornar uma nova promise, cria-se sempre uma nova instânciapromise js: **new
Promise()** e no construtor envia-se uma função com dois argumentos, **fulfill**
a promise e **reject** a promise.

Ainda assim existem demasiados erros no tratamento do código.
Agora utilizaremos chaining com promises. Existem duas opções interessantes:
    => **.then**: usa-se quando queremos fazer alguma coisa com o resultado( return )
    => **.done**: usa-se quando não se pretende fazer nada com o resultado


5.
```js

function readJSON( filename ){
    return readFile( filename, 'utf8' ).then( function( res ){
        return JSON.parse( res );
    })
}

```

JSON.parse() é uma função logo é possivel alterar para o seguinte:

6.
```js

function readJSON( filename ){
    return readFile( filename, 'utf8' ).then( JSON.parse );
}

```
