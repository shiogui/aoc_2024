const { readFile } = require('./utils');

const separator = '   ';
const data = readFile('day_1');

function first() {
    const left = [];
    const right = [];

    data.forEach(row => {
        let [l, r] = row.split(separator);
        left.push(l);
        right.push(r);
    });

    left.sort();
    right.sort();

    const valuesToSum = left.map((l, i) => {
        let r = right[i];
        if (l > r) return l - r;
        return r - l;
    });

    const result = valuesToSum
        .reduce((total, value) => total + value);

    console.log("First Result: ", result);
}

first();

function second() {
    const left = [];
    const right = [];

    data.forEach(row => {
        let [l, r] = row.split(separator);
        left.push(l);
        right.push(r);
    });

    const valuesToSum = left.map((v) => {
        let occurences = right
            .filter(w => w === v)
            .length;
        return v * occurences;
    });

    const result = valuesToSum
        .reduce((total, value) => total + value);

    console.log("Second Result: ", result);
}

second();