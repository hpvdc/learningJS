# Prototypes


Todos os objetos em Javascript tem um propriedade interna, prototype.
Não é nada mais nada menos do que uma referência a outro objeto.

1.

```js

    var obj =   {
                a: 2;
            }

var otherObj = Object.create( obj );

otherObj.a;         //2

```
Object.create serve para criar um novo objeto, tendo como referência um objeto
passado como parâmetro.

No exemplo 1, inicialmente é criado um objeto 'obj' com a propriedade 'a', e
depois cria-se um objeto novo 'otherObj' que tem como referência 'obj'.
Isto é, se tentarmos aceder a uma propriedade no 'otherObj' e essa não existir,
vai procurar essa propriedade no ' obj', e se por ventura 'obj' fosse prototype
de outro objeto e não possuisse a propriedade que queriamos obter, iria ser
procurada nesse outro objeto.

```js
var obj = {
    a: 1
}

var otherObj = Object.create( obj );

var anotherObj = Object.create( otherObj );

anotherObj.a;       //1

```

Inicialmente irá ser verificado se existe a propriedade 'a' em anotherObj. Como
não existe, irá ser procurada em otherObj, pois é uma referência de anotherObj.
Visto que também não encontra, passa ao próximo objeto que é prototype, obj e aí
já encontra.
