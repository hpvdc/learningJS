function Produto( nome, preco ){
    this.nome = nome;
    this.preco = preco;

    if( preco < 0 ){
        throw RangeError( 'Preço invalido. Impossivel criar produto!');
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


console.log( queijo );

console.log( toy );
