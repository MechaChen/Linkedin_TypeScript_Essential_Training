interface IHaveALength {
    length: number;
}

function totalLength<T extends IHaveALength>(x: T, y: T) {
    var total: number = x.length + y.length;
    return total;
}

var length = totalLength('Jess', [1,2,3]);
var length = totalLength('Jess', ' Mith');