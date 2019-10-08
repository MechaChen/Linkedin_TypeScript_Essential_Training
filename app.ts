function totalLength(x: { length: number }, y: { length: number }) {
    var total: number = x.length + y.length;
    return total;
}

var length = totalLength('Jess', [1,2,3]);