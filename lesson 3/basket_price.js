let basket = [
    ['Арбуз', 100, 2,],
    ['Дыня', 150, 3,],
    ['Арбуз', 100, 2,],
    ['Дыня', 150, 3,]
]

let BasketPriceSum = [];

countBasketPrice()
function countBasketPrice() {
    for (let i = 0; i < basket.length; i++) {
        BasketPriceSum.push(basket[i][1] * basket[i][2]);
    }
    BasketPriceSum.reduce(function (accumulator, current) {
        return result = accumulator + current;
    });
}

console.log(result);