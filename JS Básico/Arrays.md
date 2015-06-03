# Arrays

Como em várias linguagens de programação, em Javascript é possível criar arrays.
Os arrays são objects, mas para se pesquisar por um valor, pede-se a
posição e não a propriedade.

1.
```js

    var arr =   [
                "Raptor Júlio",
                18,
                false
            ]

    //Para visualizar o valor de determinada posição:

    arr[0];     // "Raptor Júlio"
    arr[1];     // 18
    arr[2];     // false

    arr.length  // 3
```

Em Javascript, tal como em muitas linguagens de programação, o index do primeiro elemento começa em 0 (zero).

O que aconteceria se quisessemos aceder a uma posição do array que não estava preenchida?

```js

    arr[3];     //undefined
```
