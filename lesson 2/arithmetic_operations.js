/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

let a = +(5);
let b = +(-10);

summation(a, b);
function summation(a, b) {
    console.log(a + b);
    return (a, b);
}

subtraction(a, b);
function subtraction(a, b) {
    console.log(a - b);
    return (a, b);
}

multiplication(a, b);
function multiplication(a, b) {
    console.log(a * b);
    return (a, b);
}

division(a, b)
function division(a, b) {
    console.log(a / b);
    return (a, b);
}