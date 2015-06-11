# .apply

Esta função é muito parecida com *.call*. Como argumento recebe *this*, e a
diferença é o outro argumento, recebe um array de argumentos.

```js
function add( a, b ){
    return a + b;
};

console.log(add.call( this, 1, 2 ));            // 3

console.log(add.apply( this, [ 1, 2 ] ));       // 3
```

No exemplo acima, dá para ver que em termos  de funcionalidade, o *.call* e o
*.apply* são iguais, a diferença é em como os argumentos são passados. No *.apply*
envia-se um array de argumentos, e no *.call* envia-se argumentos um a um.
