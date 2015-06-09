# ElasticSearch

ElasticSearch é um servidor de pesquisa baseado em [Lucene](http://lucene.apache.org/).
O objetivo desta ferramenta é pegar num pedaço de informação de um 'sítio',
analisar, procurar e visualiza-lo em tempo real.

Para mais informação [ver aqui](https://www.elastic.co/guide/index.html).
```bash
npm i --save elasticsearch

```

```js

var elastic = require( 'elasticsearch' );
var client = new elastic.Client({
    host: 'localhost:8000',
    log: 'trace';

});

```
Quando se cria uma instância de cliente, o construtor aceita vários atributos. [Ver mais opções](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html).


2.
```js

client.search({
    index: 'twitter',
    type: 'tweets',
    body: {
        query: {
            match: {
                body: 'raptorjulio'
            }
        }
    }
})
.then( function( resp ){
    var count = resp.hits.hits;
}, function( err ){
    console.trace( err.message );
});

```

No exemplo 2, vemos uma simples pesquisa no twitter, onde conta todos os tweets
que contenham a palavra *raptorjulio*, usando promises.


```js

var client = new elastic.Client({
    log: {
        type: 'file',
        level: 'trace',
        path: '/var/log/elasticsearch.log'
    }
});
```

Todas as mensagens são guardadas num ficheiro *elasticsearch.log*. É possivel
guardar as mensagens numa stream, basta substituir *file* no atributo **type** por
 *stream*.
