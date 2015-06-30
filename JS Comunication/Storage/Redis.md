# Redis

Redis ( REmote DIctionary Server) é um servidor de estruturas de dados. É open-source
(software aberto), em memória e guarda 'valores' durante o tempo que necessitarmos.
A diferença do Redis para as outras 'Bases de dados em memória', é o armazenamento
de dados. Suporta tipos de dados abstractos: listas, sets, tabelas hash ...

Existe uma ***master*** e dessa master é possivel replicar-se em slaves. Cada
slave pode ter slaves. Um user se subscrever um canal e esse canal estiver na
master, tem acesso a todas as publicações.


1.
```js

var redis = require( 'redis' );
var client = redis.createClient();

client.on( 'error', function( err ){
    console.log( "Error: " + err );
})

/*
 * Resto do código .....
*/
```

No exemplo 1, mostra como criar um cliente Redis.

#### Subscribe

```js

client.on( 'subscribe', function( channel, count ){
    /*
     * Cliente subscreveu o canal *channel*
     * quando existir alguma publicação nesse canal
     * será avisado
    */
})

client.on( 'message', function( channel, message ){
    console.log( 'Channel '+ channel + ': ' + message );
})


client.subscribe( 'Lo canal de lo Raptor' );
```

#### Publish

```js
var client2 = redis.createClient();

client2.publish( 'Lo canal de lo Raptor', 'Logo vamos tomar meio copo? Abraço' );

// Todos os clientes que subscreveram o canal *Lo canal de lo Raptor* irão receber
// esta mensagem *Logo vamos tomar meio copo? Abraço*

```
