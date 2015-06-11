
this.x = 9;

var modulo = {
    x: 81,
    getY: function(){
        return this.x;
    }
};

console.log( modulo.getY() );                              // -> 81

var getX = modulo.getY;
console.log( getX() );                                     // -> 9

var boundGetX = getX.bind( modulo );
console.log( boundGetX() );                                // -> 81
