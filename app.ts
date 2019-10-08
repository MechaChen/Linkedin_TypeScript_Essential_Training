import chalk from 'chalk';

var array: number[] = [1, 2, 3];
var array2: Array<number> = [1, 2, 3];

class KeyValuePair<TKey, TValue> {
    constructor (
        public key: TKey,
        public value: TValue,
    ) {}

    public getKey() {
        console.log(chalk.black.bgBlue(` ${this.key} `));
    }

    public getValue() {
        console.log(chalk.black.bgYellow(` ${this.value} `));
    }
}

let pair1 = new KeyValuePair<number, string>(1, 'First');
pair1.getKey();
pair1.getValue();

let pair2 = new KeyValuePair<string, Date>('Second', new Date());
pair2.getKey();
pair2.getValue();

let pair3 = new KeyValuePair<number, string>(3, 'Third');
pair3.getKey();
pair3.getValue();
