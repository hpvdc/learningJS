# .bind

Esta função quando executada, cria uma nova função com os mesmos parametros da
função que está a chamar.

```js
this.x = 9;
var modulo = {
    x: 81,
    getX: function(){
        return this.x;
    }
}

modulo.getX();                              // -> 81

var getX = modulo.getX;
getX();                                     // -> 9

var boundGetX = getX.bind( modulo );
boundGetX();                                // -> 81


```

No primeiro resultado, é simples ver o porquê do resultado ser 81, estamos a
invocar uma função que é atributo de um objeto. Logo o **this** pertence ao
universo *modulo*. Em que o x vai ser igual a 81.


No segundo resultado, atribuimos a função ***return this.x*** a uma variavel
global getX. Esta variável é global, por isso o *this* já não corresponde
ao universo do objeto *modulo*. Logo o resultado esperado vai ser o x definido
na primeira linha, porque também é uma variável global.


No último resultado, utilizando o bind, estamos a dizer q a variável *boundGetX*
vai ser usada no contexto de modulo, logo quando executada, irá retornar o valor
de x relacionado com o objeto modulo.
