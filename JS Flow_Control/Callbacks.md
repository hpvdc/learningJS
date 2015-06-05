# Callbacks

Este é o tópico mais importante para se perceber como o node funciona.
Praticamente tudo no node usa callbacks.

Em javascript as funções são executadas, não pela ordem de escrita do código,
mas pelo tempo que cada função demora a ser executada. Callbacks como o próprio
nome indica, é para ser chamado *no fim* de alguma função. Serve para garantir
que alguma coisa é executada depois de determinada função.

1.
```js

var fs = require('fs');
var num = undefined;

function add() {
  fs.readFile('num.txt', function finish(err, fileContents) {
    num = parseInt(fileContents);
    num++;
  })
};

add();

console.log(num);

```


O que acontece no exemplo 1, é que a última linha de código ( **console.log** ),
vai ser executada antes da função **add**, porque é mais rápido imprimir
uma linha do que executar uma função de leitura. Visto que a função **add** ainda
 não foi executada, o **console.log(num)** vai imprimir **undefined**.


2.

```js

var fs = require('fs');
var num = undefined;

function add(callback) {
  fs.readFile('num.txt', function finish(err, fileContents) {
    num = parseInt(fileContents);
    num++;
    callback();
  })
}

function printNum() {
  console.log(num);
};

add(printNum);

```

No exemplo 2, já se consegue dar a volta a esse problema, criando uma função
que imprime o **num** e seja chamada na função principal **add**.

Criando isto, é possível evitar a situação vista no exemplo 1, porque é garantido  
que a função que vai imprimir o **num**,só é chamada quando a leitura do
ficheiro estiver terminada.
