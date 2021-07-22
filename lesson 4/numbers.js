"use strict";

function optimizingNumber(num) {
    const numberObject = {
        units: 0, // единицы
        dozen: 0, // десятки
        hundred: 0, // сотни
    }
    if (num > 999) {
        alert('В ведено слишком длинное число. Необходимо ввести число от 0 до 999');
        return numberObject;
    } if (num < 0) {
        alert('В ведено отрицательное число. Необходимо ввести число от 0 до 999');
        return numberObject;
    }
    num = String(num);
    if (num.length === 1) {
        var number = '00' + num;
    } if (num.length === 2) {
        var number = '0' + num;
    } else if (num.length === 3) {
        var number = num;
    }
    numberObject['units'] = number[2];
    numberObject['dozen'] = number[1];
    numberObject['hundred'] = number[0];
    return numberObject;
}
console.log(optimizingNumber(153));