'use strict';

const a = [1, 3, 'test', 6, 2, 5];

const find = (arr, value) => {
    let k = -1;
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) k = i+1;
    }
    return k;
}

console.log(find(a, 'test'));

const filterrange = (arr, a, b) => {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) array.push(arr[i]);
    }
    return array;
}

console.log(filterrange(a, 2, 4));

