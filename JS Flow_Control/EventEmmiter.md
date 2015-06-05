# EventEmmiter

Muitos dos objetos do Node emitem eventos.
Já existem predefinidos alguns eventos, mas é possivel definir novos.
Muitas funções estão estar ligadas a objetos, e são executadas quando um evento
é emitido. A isto chamam-se listeners.

Para se aceder á class EventEmmiter:

```js

var eventEmitter = require( 'events' ).EventEmmiter;
var events = new eventEmitter();

```


### emitter.on( 'evento', função )

Adiciona a **função** no final do array de *listeners* para aquele evento.
Não é feita nenhuma verificação para ver se a função já existe no array. É
possivel chamar várias vezes a mesma combinação de ( evento, função ) sendo
adicionadas tantas vezes quantas a vezes chamadas.


```js

events.on( 'test', function(){
    console.log( 'Teste concluido!' );
});

events.on( 'print', function( message ){
    console.log( message );
});

```


### emitter.once( 'evento', função )

Adiciona uma única vez a função para aquele determinado evento. Depois de
executada, é removida.



```js

events.once( 'test', function(){
    console.log( 'Primeiro teste, concluido!' );
});

```


### emitter.removeListener( 'evento', função )

Remove a função do array de listeners daquele determinado evento.
Se existirem várias instâncias daquela função para aquele evento, apenas é
removida uma. Para remover todas, é necessário executar este evento as vezes
necessárias para eliminar todas.

```js

var callback = function(){
    console.log( 'Teste concluido!' );
};

events.on( 'test', callback );

events.removeListener( 'test', callback )
```


### emitter.removeAllListeners( [*evento*] )

Não é necessário indicar o evento, e assim todas as funções relativas a todos os
eventos são eliminadas. Se indcar o evento, são removidas apenas as funções
relativas a esse mesmo evento.


### emitter.emit( evento, [função 1, ... ] )

Executa cada uma das funções para aquele evento.

```js

events.emit( 'test' );
// Teste concluido!

var msg = 'El raptor julio es muy eagle';

events.emit( 'print', msg );
// El raptor julio es muy eagle

```
