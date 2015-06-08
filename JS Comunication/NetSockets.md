# Net Sockets

É um módulo do nodejs. Net contém métodos para criar ambos, cliente e servidor.
Para criar um servidor é simpes.


1.
```js

var net = require('net');
var server = net.createServer( function( c ){
    console.log( 'client connected' );

    c.on( 'end', function(){
        console.log( 'client disconnected' );
    });

    c.write( 'Hello\r\n');
    c.pipe( c );
});

server.listen( 3000, function(){
    console.log( 'A ouvir na porta 3000' );
});


```

No exemplo 1 foi criado um servidor e sempre que um user se liga é enviada uma
mensagem a dizer que um cliente foi conectado. Sempre que um user se desliga
é enviada uma mensagem a dizer q foi desconectado.


2.
```js

var net = require('net');
var client = net.connect( {port: 3000}, function(){
    console.log( 'connected to server!' );
    client.write( 'world!\r\n' );
})

client.on( 'data', function( data ){
    console.log( data.toString() );
    client.end();
});

client.on( 'end', function(){
    console.log('disconnected from server!' );
});

```
No exemplo 2, é utilizado um método que retorna novo *net.Socket*, e conecta-se
à porta/endereço. Quando a socket é estabelecida, o evento *connect* é emitido.




```js
server.listen( {
        host: 'localhost',
        port: 80,
        exclusive: true
} )


```

Outra forma de pôr um servidor a escutar numa porta.
