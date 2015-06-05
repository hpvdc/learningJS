# Chaining

Chaining é um padrão comum no mundo do Javascript.
O objetivo deste padrão é simplificar o código, chamando várias funções no mesmo
objeto consecutivamente.

```js
var Animal = function(){
    this.name = 'Julio';
    this.color = 'brown';
    this.gender = 'male';
};

animal.prototype.setName = function( name ){
    this.name = name;
};

animal.prototype.setColor = function( color ){
    this.color = color;
};

animal.prototype.setGender = function( gender ){
    this.gender = gender;
};

animal.prototype.sava = function(){
    console.log('Saving ' + this.name + ', the '
                + this.color + ' ' + this.gender + ' animal...');
};




/*
 * Foi criada uma classe animal com determinados atributos e algumas funções.
 * De seguida cria-se uma instância do objeto animal.
*/

var raptor = new Animal();

raptor.setName( 'Raptor' );
raptor.setColor( 'blue' );
raptor.setGender( 'animalsexual' );

raptor.save();
//Saving Raptor, the blue animalsexual animal...
```


No exemplo acima, são repetidas várias definições desnecessáriamente.
E se pudesse ser implementado da seguinte forma:

```js

raptor.setName( 'Raptor' ).setColor( 'blue' ).setGender( 'animalsexual' );
//ERROR:
// Uncaught TypeError: Cannot call method 'setColor' of undefined

```

Iria retornar erro, porque as funções não retornam o objeto, apenas alteram
diretamente o atributo do objeto. Como a função setName() não retorna nada era o
mesmo que fazer:


```js

var tmp = raptor.setName( 'Raptor' );
tmp.setColor( 'blue' );
//ERROR:
// Uncaught TypeError: Cannot call method 'setColor' of undefined

```

A variavel tmp não contém valor porque a função nao está a retornar nada. Logo
é o mesmo problema.



Existe uma maneira de dar a volta a esta situação, e aí entra o método Chaining.
Se nestas funções retornarmos o objeto (**this**), já é possível reescrever várias
funções seguidas, pois cada uma está a aceder ao objeto retornada pela anterior.

```js

animal.prototype.setName = function( name ){
    this.name = name;
    return this;
};

animal.prototype.setColor = function( color ){
    this.color = color;
    return this;
};

animal.prototype.setGender = function( gender ){
    this.gender = gender;
    return this;
};

animal.prototype.sava = function(){
    console.log('Saving ' + this.name + ', the '
                + this.color + ' ' + this.gender + ' animal...');
    return this;
};


```

Ás funções definidas inicialmente, são acrescentadas um return do objeto e aí
já é possivel escrever o código de forma mais simples e rápida.

```js

new Animal()
    .setName( 'Raptor' )
    .setColor( 'black' )
    .setGender( 'male' )
    .save();

```
