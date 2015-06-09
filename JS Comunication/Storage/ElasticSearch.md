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

Imaginemos que era da nossa importância gravar informação num ficheiro.

```js

PUT /Documentos/Pessoa/1
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}

PUT /Documentos/Pessoa/2
{
    "first_name" :  "Jane",
    "last_name" :   "Smith",
    "age" :         32,
    "about" :       "I like to collect rock albums",
    "interests":  [ "music" ]
}

PUT /Documentos/Pessoa/3
{
    "first_name" :  "Douglas",
    "last_name" :   "Fir",
    "age" :         35,
    "about":        "I like to build cabinets",
    "interests":  [ "forestry" ]
}


```

Agora que temos informação nos documentos, vamos ver como foram formatados:
```js
GET /Documentos/Pessoa/1
```
```js
{
  "_index" :   "Documentos",
  "_type" :    "Pessoa",
  "_id" :      "1",
  "_version" : 1,
  "found" :    true,
  "_source" :  {
      "first_name" :  "John",
      "last_name" :   "Smith",
      "age" :         25,
      "about" :       "I love to go rock climbing",
      "interests":  [ "sports", "music" ]
  }
}

```


Agora vamos fazer uma pesquisa muito simples. Em vez de pedirmos por uma pessoa
em especifico, vamos pedir para nos dar todas as pessoas que estão registadas.

```js
GET /Documentos/Pessoa/_search
```
Ao indicarmos **_search** estamos a dizer para nos retornar todos o conteudo
disponivel dentro do diretorio.

```js
{
   "took":      6,
   "timed_out": false,
   "_shards": { ... },
   "hits": {
      "total":      3,
      "max_score":  1,
      "hits": [
         {
            "_index":         "Documentos",
            "_type":          "Pessoa",
            "_id":            "3",
            "_score":         1,
            "_source": {
               "first_name":  "Douglas",
               "last_name":   "Fir",
               "age":         35,
               "about":       "I like to build cabinets",
               "interests": [ "forestry" ]
            }
         },
         {
            "_index":         "Documentos",
            "_type":          "Pessoa",
            "_id":            "1",
            "_score":         1,
            "_source": {
               "first_name":  "John",
               "last_name":   "Smith",
               "age":         25,
               "about":       "I love to go rock climbing",
               "interests": [ "sports", "music" ]
            }
         },
         {
            "_index":         "Documentos",
            "_type":          "Pessoa",
            "_id":            "2",
            "_score":         1,
            "_source": {
               "first_name":  "Jane",
               "last_name":   "Smith",
               "age":         32,
               "about":       "I like to collect rock albums",
               "interests": [ "music" ]
            }
         }
      ]
   }
}
```

Para ja fácil ahh?! Agora imaginemos que precisamos de todas as pessoas em que o
último nome seja *Smith*.

```js
GET Documentos/Pessoa/_search?q=last_name:Smith
```

```js
{
   ...
   "hits": {
      "total":      2,
      "max_score":  0.30685282,
      "hits": [
         {
            ...
            "_source": {
               "first_name":  "John",
               "last_name":   "Smith",
               "age":         25,
               "about":       "I love to go rock climbing",
               "interests": [ "sports", "music" ]
            }
         },
         {
            ...
            "_source": {
               "first_name":  "Jane",
               "last_name":   "Smith",
               "age":         32,
               "about":       "I like to collect rock albums",
               "interests": [ "music" ]
            }
         }
      ]
   }
}
```
E se quisermos á pesquisa feita anteriormente adicionar um campo, que
nos dê as pessoas com ultimo nome *Smith* e que tenham mais de 30 anos?
A query funciona desta maneira:

```js
{
    'query': {
        'filtered': {
            'filter': {
                'range': {
                    'age': {
                        'gt': 30
                    }
                }
            },
            'query': {
                'match': {
                    'last_name': 'Smith'
                }
            }
        }
    }
}
```
No nosso exemplo vai retornar um único caso, *Jane Smith*.
