# .call

Este método chama uma função com o argumento *this* e outros argumentos que necessitar.
Imaginemos que temos um construtor de *Produtos*, e temos outras duas funções,
*Comida* e *Brinquedo*. O objetico é criar cada um dos objetos (Comida e Brinquedo)
através de Produtos.


```js
function Produto( nome, preco ){
    this.nome = nome;
    this.preco = preco;

    if( preco < 0 ){
        throw RangeError( 'Preço invalido. Impossivel criar produto!')
    }
    return this;
}

function Comida( nome, preco ){
    Produto.call( this, nome, preco );
    this.category = 'Comida';
}

Comida.prototype = Object.create( Produto.prototype );

function Brinquedo( nome, preco ){
    Produto.call( this, nome, preco );
    this.category = 'Brinquedo';
}

Brinquedo.prototype = Object.create( Produto.prototype );

var queijo = new Comida( 'cheddar', 5 );
var toy = new Brinquedo( 'Story', 20 );
```
