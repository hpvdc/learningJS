# setTimeout

Uma função chamada por este evento é executada **uma única vez**, depois de
esperar o tempo passado como parametro em milisegundos.

```js

function show(){
    console.log("O raptor Júlio foi em antes raptar!");
}

setTimeout( show, 3000);

```

O que vai acontecer no exemplo acima, é que a funcão show() vai ser executada
exatamente 3 segundos depois de iniciar o programa. Depois de executada uma
única vez o programa termina.
