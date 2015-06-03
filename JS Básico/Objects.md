# Objects

Cada objeto, em Javascript, não é mais do que um conjunto de
propriedades, em que cada uma tem um valor definido.

Como criar um objeto:

1.
```js
    var obj =   {
                a: "Raptor Júlio",
                b: 18,
                c: false
            };

    // A maneira mais rápida e comum de se obter o valor de uma
    // propriedade de um objeto é usando .(nome da propriedade)

    obj.a;      // "Raptor Júlio"
    obj.b;      // 18
    obj.c;      // false

    // É possível, também, visualizar o conteúdo de cada
    // propriedade da seguinte maneira:

    obj["a"];   // "Raptor Júlio"
    obj["b"];   // 18
    obj["c"];   // false

```
