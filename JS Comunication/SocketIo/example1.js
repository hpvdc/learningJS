var http = require('http');
var io = require('socket.io')( http );

var server = http.createServer( function( req, res ){
    res.end('WTF');


});

io.on( 'connection', function( socket ){
    socket.on( 'connection', function(){
        io.sockets.emit( console.log( 'Someone connected' ) );
    } );
});

server.listen( 3000 );
