var http = require('http');
var net = require('net');
var events =require('events').EventEmitter;

var server = http.createServer( function( req, res ){
    res.end( 'Hello World\n' );
});


// Sempre que existir uma nova conexão imprimir a mensagem 'Someone connected',
// e quando essa pessoa sair imprimir 'Someone disconnected'
server.on( 'connection', function( socket ){
    console.log( 'someone connected!' );
    socket.on( 'end', function(){
        console.log( 'someone disconnected' );
    });
});

//Quando o servidor fechar, mostrar a mensagem 'Server Shutting down'
server.on( 'close', function( ){
    console.log( 'Server shutting down!' );
});

server.listen( 3000, console.log( 'Server listen on: localhost:3000') );
