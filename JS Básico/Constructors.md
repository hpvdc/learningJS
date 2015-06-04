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

var a = new NadaDeJeito();

a;      // {}
```

No exemplo 1 criamos um construtor em que recebemos um nome como argumento, e criamos uma niva instância de Tree e guardamos em x.

No exemplo 2, como a função NadaDeJeito só tem um console.log, o que vai acontecer é que quando se cria um novo objeto do tipo NadaDeJeito, vai ser imprimido para a consola "Não faz nada de jeito", mas a fica com um objeto vazio porque nao tem nenhuma propriedade atribuida.
