'use strict';

const salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

const isEmpty = (obj) => {
    let i = 0;
    for (const key in obj) {
        i = 1;
    }
    if(i){
        return false;
    } else {
        return true;
    }
}

let schedule = {};
console.log(isEmpty(schedule));

const summ = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(summ(salaries));

const max = (obj) => {
    let i = 0;
    for (const key in obj) {
        i = 1;
    }
    if(i){
        let max = -Infinity,
            maxname = '';
        for (let key in obj) {
            if (obj[key] > max) {
                max = obj[key];
                maxname = key;
            }
        }
        return maxname;
    } else {
        return 'нет сотрудников';
    }
}

console.log(max(salaries));

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

const multiplyNumeric = (obj, k) => {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= k;
        } else {
            continue;
        }
    }
    return obj;
}

console.log(multiplyNumeric(salaries, 2));