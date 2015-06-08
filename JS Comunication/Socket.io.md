# Socket.io

Criar servidor socket.io.

**Usando http.createServer do node:**

```js
// Server side
var http = require( 'http' ).createServer( handler );
var io = require('socket.io')(http);
var fs = require('fs');

http.listen( 80 );

function handler( req, res ){
    fs.readFile( __dirname + '/index.html', function( err, data){
        if( err ){
            res.writeHead( 500 );
            return res.end( 'Error loading index.html' );
        }
        res.writeHead( 200 );
        res.end( data );
    });
};

io.on( 'connection', function( socket ){
    socket.emit( 'news', {hello: 'world' });
    socket.on( 'otherEvent', function( data ){
        console.log( data );
    })
})

```
```html
<!--Client side-->
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('otherEvent', { my: 'data' });
  });
</script>
```


Existem outras formas de criar servidor/cliente mas vou só abordar usando node.


**Enviar/Receber eventos**

```js

var io = require( 'socket.io' )( 80 );

io.on( 'connection', function( socket ){
    io.emit( 'this', {will: 'be received by everyone'});

    socket.on( 'private message', function( from, msg ){
        console.log( 'I receveid a private message by '+ from + ': ' + msg);
    })

    socket.on( 'disconnect', function(){
        io.emit( 'user disconnected' );
    })
})

```

**Enviar mensagens para todos excepto eu ( broadcast )**
```js

var io = require( 'socket.io' )( 80 );
io.on( 'connection', function( socket ){
    socket.broadcast.emit( 'user connected' );
})

```
