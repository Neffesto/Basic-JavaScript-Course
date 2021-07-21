"use strict";
//let num = parseInt(2);
let num = parseInt(prompt('Введите трех значное число от 0 до 999'));
function optimizingNumber(num) {
    const numberObject = {
        units: 0, // единицы
        dozen: 0, // десятки
        hundred: 0, // сотни
    }
    if (num > 999) {
        alert('Вы в вели слишком длинное число');
        return numberObject;
    } if (num < 0) {
        alert('Вы в вели отрицательное число');
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
console.log(optimizingNumber(num));