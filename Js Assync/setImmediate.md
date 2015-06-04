# setImmediate / process.nextTick

Este evento faz parte da API do **nodejs**, e serve para funções antes de
qualquer evento I/O , setInterval ou setTimeout.
É muito parecido com o 'process.nextTick()', a diferença é que com o
setImmediate() é possível executar funções que não estão contidas no evento, em
primeiro lugar se forem mais rápidas de serem executadas, enquanto que no
process.nextTick() entra logo e executa tudo o que está contido dentro, só
depois executa o que está fora.


1.
```js

setImmediate(function() {
  setImmediate(function() {
    console.log(1);
    setImmediate(function() { console.log(2); });
    setImmediate(function() { console.log(3); });
  });
  setImmediate(function() {
    console.log(4);
    setImmediate(function() { console.log(5); });
    setImmediate(function() { console.log(6); });
  });
});


setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)

```




##### Qual seria o output deste programa?

```js
'TIMEOUT FIRED'
1
4
2
3
5
6
```

Na primeira linha imprimia o que estava contido no setTimeout, porque é mais
rápido fazer o print para o ecrâ. Depois iria executar função a função por
hierarquia.







2.
```js

process.nextTick(function() {
  process.nextTick(function() {
    console.log(1);
    process.nextTick(function() { console.log(2); });
    process.nextTick(function() { console.log(3); });
  });
  process.nextTick(function() {
    console.log(4);
    process.nextTick(function() { console.log(5); });
    process.nextTick(function() { console.log(6); });
  });
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)

```
No exemplo acima, independentemente do setTimeout estar definido acima ou abaixo
do process.nextTick(), vai acontecer é que é executado em primeiro lugar o
process.nextTick e tudo o que está contido nele e só depois o que está fora do
nextTick.


##### Qual seria o output deste programa?

```js
1
4
2
3
5
6
'TIMEOUT FIRED'
```
