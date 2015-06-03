# Constructors

Exemplo de um construtor válido:

1.
```js

function Tree( name ){
    this.name = name;
}

var x = new Tree( 'Esbogalheiro' );

x;      // Tree( name: "Esbogalheiro" );

```


Exemplo de um construtor inválido:

2.
```js

function NadaDeJeito(){
    console.log( "Não faz nada de jeito" );
}

var a  new NadaDeJeito();

a;      // {}
```

No exemplo 1 criamos um construtor em que recebemos um nome como argumento, e 
