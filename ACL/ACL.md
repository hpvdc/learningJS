# ACL
Acess Control List, é uma tabela que diz ao *SO* quais os direitos de acesso de um
utilizador a um determinado objeto do sistema, por exemplo a um ficheiro num
determinado diretorio. Cada objeto tem atributos de segurança que definem quem
pode aceder.

No módulo que vou abordar aqui, estão embutidos apenas 3 tipos:
- Redis;
- MongoDB;
- In-Memory;

```js
var acl = require( 'acl' );

/*
 * Destas 3 opçoes que estão abaixo, apenas se escolhe usar uma
 */


// Para se usar o redis em BackEnd
acl = new acl( new acl.redisBackend( redisClient, prefix ));

// Para se usar memoria em BackEnd
acl = new acl( new acl.memoryBackend());

// Para se usar mongoDB em BackEnd
acl = new acl( new acl.mongodbBackend( dbInstance, prefix ));

```


Agora vamos definir os direitos de acesso de vários utilizadores.

```js
// Os utilizadores que sejam do tipo guest apenas podem ver blogs
acl.allow( 'guest', 'blogs', 'view' );

// Os utilizadores que sejam do tipo member podem ver/editar/apagar blogs
acl.allow( 'member', 'blogs', [ 'edit', 'view', 'delete' ]);

// O * funciona como 'wildcard', isto é, tem todas as permissoes possiveis
acl.allow( 'admin', [ 'blogs', 'forums' ], '*' );
```



Como definir que tipos sao os utilizadores

```js
// O julio pode fazer tudo
acl.addUserRoles( 'julio', 'member' );

```

Verificar se um determinado user tem um tipo de acesso a um determinado *sitio*

```js
acl.isAllowed( 'julio', 'blogs', 'view', function( err, resp ){
    if( resp ){
        console.log( 'User is allowed to view blogs' );
    }
})

```

Verificar que tipo de permissoes um user tem para determinado *sitio*

```js
acl.isAllowedPermissions( 'julio', [ 'blogs', 'forums' ], function( err, permissions){
    console.log( permissions );
})

// Retorna um array com as permissoes:x:

/*
 * [ { 'blogs': ['get', 'delete' ]},
 *   { 'forums': ['get, 'put'] }
 * ]
 */
```
