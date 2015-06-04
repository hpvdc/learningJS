# setInterval

Uma função chamada por este evento é executada **sempre** (até ordem em
contrário), num intervalo de tempo específico.

```js

function show(){
    console.log("O raptor Júlio foi em antes raptar!");
}

setInterval( show, 3000);

```

O que vai acontecer no exemplo acima, é que a funcão show() vai ser executada
de 3 em 3 segundos depois de iniciar o programa. A função é executada até ordem
em contrário.
