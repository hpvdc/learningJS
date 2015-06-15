# MongoDB

MongoDB é uma base base de dados através de documentos, muito parecida com Redis,
desenhada para uma escalagem e desenvolvimento mais rápidos.


Toda a informação inserida na base de dados, é gravada num documento, no qual a
estrutura da informação é disposta através de pares ***field:value***. Os documentos
são muito parecidos com ficheiros JSON.

Exemplo de informação a ser guardada.

```js
name: 'Sue',                    <-- field: value
age: 26,                        <-- field: value
status: 'A',
groups: ['news', 'sports'];
```

### Replicaçao
A replicação dispõe de redundância e aumenta a quantidade de dados disponiveis.
Existindo multiplas cópias de dados em vários servidores, existe a proteção da DB
se um servidor falhar.


### Sharding / Horizontal Scaling
Sharding é um método para guardar informação em várias máquinas. MongoDB usa sharding
para conseguir 'aguentar' com ficheiros com grande informação. Servers/Shards são
DB independentes, mas em conjunto são apenas uma DB lógica.

 Collection 1 ( 1TB )  ======> Divide-se em 4 shards

 **Shard 1** ( 256 GB ) - **Shard 2** ( 256 GB ) - **Shard 3** ( 256 GB ) - **Shard 4** ( 256 GB )


 - Divide-se o numero de operações por cada Shard. Por exemplo para inserir info,
 a app apenas necessida de aceder ao shard responsável pela gravação.
 - Reduz-se a quantidade de informação que cada servidor precisa de guardar. Cada
 Shard guarda menos dados á medida que o cluster cresce.


###### Vertical Scaling
Adiciona mais recursos ao CPU e ao armazenamento. Mas isto traz alguns problemas:
 - Sistemas que tem alta performance com vários CPUs e muita memória RAM são
 desproporcionalmente mais caros que sistemas mais pequenos.
