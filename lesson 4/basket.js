"use strict";

const basket = {
    products: [
        {
            productName: 'melon',
            productCost: 100,
            productQuantity: 2
        },
        {
            productName: 'orange',
            productCost: 15,
            productQuantity: 7
        }
    ],
    price() {
        return this.products.reduce((accumulator, currentValue) => accumulator += currentValue.productCost * currentValue.productQuantity, 0);
    }
};
console.log(basket.price());