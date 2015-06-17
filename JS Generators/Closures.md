# Closures

O objetivo das closures é possibilitar a criação de variaveis privadas.
É possivel definar uma variável de duas formas: Globais ou Locais.


#### Variáveis Locais

Uma variável local tem pouco tempo de *vida* comparado com variáveis globais. As
variáveis são criadas quando as funçoes sao invocadas mas a partir do momento em
que a função termina elas sao apagadas. Só podem ser usadas pelas funçoes onde
são criadas.

```js
function sum(){
    var a = 4;
    return a + a;
}


```


#### Variáveis Globais

As variáveis globais já têm um maior tempo de vida. Estas estão *ativas* enquanto
a aplicação também estiver *ativa*. Estas variáveis podem ser usadas por todos
os scripts da aplicação.

```js
var a = 4;
function sum(){
    return a + a;
}

```

Imaginemos agora que quero incrementar o valor de *a* para me mostrar a soma.

```js
function sum(){
    var a = 1;
    console.log(a + a);
    a++;
}
sum();
sum();
sum();
```
Teria de mostrar 2 -> 4 -> 6 -> .... certo?
Não. Existe um problema. Cada vez q chamamos a função, a variavel *a* passa sempre
a 1. Logo o output iria ser 2 -> 2 -> 2 -> 2 -> ...

As closures são para evitarmos por exemplo, situações como esta.

```js
var soma = (function(){
    var a = 0;
    return function(){
        a++;
        return a + a;
    }
})();

soma();
soma();
soma();

```
O que está a acontecer no código acima é que a primeira função só é executada uma
vez, logo *a* só é definida uma vez a zero. A variavel soma fica igual à função que
é retornada. A parte mais engraçada é que soma tem acesso a variavel *a* porque
este pertence à função *pai*. Só a variavel soma, que é uma funçao, pode aceder
á variavel *a*.
