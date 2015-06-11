var http = require('http');
var net = require('net');
var events =require('events').EventEmitter;

var server = http.createServer( function( req, res ){

});

server.on( 'connection', function( socket ){
    console.log( 'someone connected!' );
    socket.on( 'end', function(){
        console.log( 'someone disconnected' );
    });
});

server.on( 'close', function( ){
    console.log( 'Server shutting down!' );
});

server.listen( 3000 );
