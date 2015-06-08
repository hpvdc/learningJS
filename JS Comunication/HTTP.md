# HTTP Server

As interfaces HTTP do node, foram construidas para suportar muitas opções dos
 protocolos que eram dificeis de usar. Em particular, grandes quantidades de
 mensagens codificadas.

-----> http.STATUS_CODES[404] === 'Not Found';

**Criar servidor**

```js
var http = require('http');

//Cria servidor
var server = http.createServer( function( req, res ){
    /*
     * Do
     * something
     * here
    */
})

//Quando alguem se conecta, envia mensagem
server.on( 'connection', function( socket ){
    console.log( 'someone connected!' );
});

// Fecha o servidor e envia uma mensagem a avisar
server.close( function( ){
    console.log( 'Server shutting down!' );
})


//poem o server a escutar numa porta
server.listen( 3000 );
```


**Criar Cliente**
```js
//Criar pedido
var req = http.request( options, function( res ){
    console.log( 'STATUS: '+ res.statusCode );
    // ....
    res.setEncoding( 'utf8' );
    res.on( 'data', function( chunk ){
        console.log( 'BODY: '+ chunk );
    });
});

//Se existir algum erro
req.on( 'error', function( e ){
    console.log('There was a problem with request: ' + e.message );
})

//Para enviar alguma coisa para servidor
var msg = 'Hello World\n';
req.write( msg );
//Terminar pedido
req.end();

```
