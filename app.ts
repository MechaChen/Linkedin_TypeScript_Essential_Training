function totalLength<T extends { length: number }>(x: T, y: T) {
    var total: number = x.length + y.length;
    return total;
}

var length = totalLength('Jess', [1,2,3]);
var length = totalLength('Jess', ' Mith');