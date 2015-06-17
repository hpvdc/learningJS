# Streams
Streams são estruturas de dados similares arrays/linked lists.
Estas conseguem ter um numero infinito de elementos.

```js
var stream = Stream.make( 10, 20, 30);
console.log( stream.length );           // 3
console.log( stream.head() );           // 10
console.log( stream.item( 0 ) );        // 10
console.log( stream.item( 1 ) );        // 20
console.log( stream.item( 2 ) );        // 30

var t = stream.tail();                  // t fica uma stream com os valores 20 e 30
console.log( t.head() );                // 20
var u = stream.tail();                  // u fica uma stream com o valor 30
console.log( u.head() );                // 30
var z = stream.tail();                  // z fica uma stream vazia
console.log( z.empty() );                // true


```
Agora, adequando as streams a api do node, as streams podem ser de leitura, de
escrita ou ambas.
É possivel passar o conteudo de uma stream de leitura para uma stream de escrita.

```js
readableStream.pipe( writableStream );
```

### Readable
As streams de leitura, emitem o evento *data* sempre que recebem um *chunk* de
dados, e quando termina emitem o evento *end*.


### Writable
As streams de escrita implementam duas funçoes: *write* e *end*.
Sempre que se escreve numa stream de escrita, esta retorna *true* ou *false*. Se
retornar *true*, é porque está tudo tranquilo, e é possivel continuar a escrever.
Se retornar *false*, quer dizer que ela não processou toda a informação, para parar
de enviar.
