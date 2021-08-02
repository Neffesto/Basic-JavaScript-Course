'use strict';

const cartItem = {
    render(bascet) {
        return `<div class = "bascet">
            <div>Наименование: ${bascet.productName} </div>
            <div>Цена за штуку: ${bascet.productCost} </div>
            <div>Количество: ${bascet.productQuantity} </div>
            <div>Стоимость: ${bascet.productQuantity * bascet.productCost} </div>
        </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartItem,
    product: [
        {
            productName: 'melon',
            productCost: 100,
            productQuantity: 2
        },
        {
            productName: 'orange',
            productCost: 15,
            productQuantity: 7
        },
    ],

    init() {
        this.cartListBlock = document.querySelector('.cartlist');
        this.render();
    },

    render() {
        if (this.product.length) {
            this.product.forEach(bascet => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(bascet));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.product.length} позиций стоимостью ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },
    getCartPrice() {
        return this.product.reduce((accumulator, currentValue) => accumulator += currentValue.productCost * currentValue.productQuantity, 0);
    },
};

cart.init();