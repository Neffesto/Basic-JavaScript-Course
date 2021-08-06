/* Пример использования замыкания применимый в практикуму*/


const commonSettings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winFoodCount: 50,
};

const getConfig = (userSettings) => {
    const settings = { ...commonSettings, ...userSettings }
    return {
        getRowsCount: () => settings.rowsCount,
        getColsCount: () => settings.colsCount,
        getSpeed: () => settings.speed,
        getWinFoodCount: () => settings.winFoodCount,
        validate() {
            const result = {
                isValid: true,
                errors: [],
            };
            if (settings.rowsCount < 10 || settings.rowsCount > 30) {
                result.isValid = false;
                result.errors.push('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
            }
            if (settings.colsCount < 10 || settings.colsCount > 30) {
                result.isValid = false;
                result.errors.push('Неверные настройки, значение colsCount должно быть в диапазоне [10, 30].');
            }
            if (settings.speed < 1 || settings.speed > 20) {
                result.isValid = false;
                result.errors.push('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
            }
            if (settings.winFoodCount < 5 || settings.winFoodCount > 50) {
                result.isValid = false;
                result.errors.push('Неверные настройки, значение winLength должно быть в диапазоне [5, 50].');
            }
            return result;
        },
    }
}





if (!("a" in window)) {
    var a = 1;
}
alert(a);
//undefined потому, что переменная а локальная, а должна быть строго глобальной


var b = function a(x) {
    x && a(--x);
};
alert(a);
//false, т.к. переменная а локальная


function a(x) {
    return x * 2;
}
var a;
alert(a);
//undefined, так как alert обращается к меременной a, а не к функции


function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
// 10, так как функция передает ей значение


function a() {
    alert(this);
}
a.call(null);

// null, т.к. нет значения.
