var redis = require( 'redis' );
var client = redis.createClient();

var canal = 'Canal';
var msg = 'Meio copito logo?';


client.on( 'subscribe', function( channel, count ){
    console.log( 'Cliente subscreveu o canal ' + channel );
});

client.on( 'message', function( channel, message ){
    console.log('Cliente to channel ' + channel + ': ' + message );
});

client.subscribe( canal );
