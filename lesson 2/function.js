/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/


function mathOperation(a, b, operation) {
    switch (operation) {
        case "summation":
            return summation(a, b);
        case "subtraction":
            return subtraction(a, b);
        case "multiplication":
            return multiplication(a, b);
        case "division":
            return division(a, b);
    }

    summation(a, b);
    function summation(a, b) {
        //console.log(a + b);
        return (a + b);
    }

    subtraction(a, b);
    function subtraction(a, b) {
        //console.log(a - b);
        return (a - b);
    }

    multiplication(a, b);
    function multiplication(a, b) {
        //console.log(a * b);
        return (a * b);
    }

    division(a, b);
    function division(a, b) {
        //console.log(a / b);
        return (a / b);
    }
    return (a, b);
}

console.log(mathOperation(-2, 0, "division"));