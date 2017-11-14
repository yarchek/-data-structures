'use strict';

const truncate = (str, maxlenght) => {
    let FinalWord;
    if (str.length > maxlenght) {
        FinalWord = str.substr(0, maxlenght) + '...';
        return FinalWord;
    } else {
        return str;
    }
}

console.log(truncate('Я весёлый таракан, я бегу, бегу, бегу', 20));

const extractCurrencyValue = (str) => {
    let number = [];
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            continue;
        } else {
            if (isNaN(str[i+1]) && (i !== str.length - 1)) {
                number += Number(str[i]) + ' ';
            } else {
                number += Number(str[i]);
            }
        }
    }
    return number;
}

console.log(extractCurrencyValue('$120'));