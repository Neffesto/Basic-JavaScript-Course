"use strict";

const catalog = {
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 1,
            product_name: 'melon',
            price: 100,
        },
        {
            id_product: 2,
            product_name: 'orange',
            price: 15,
        },
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.list.length > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.cart.addToBasket(productToAdd);
    },

    // getCatalogListLength() {
    //     return this.list.length;
    // },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },
};

const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [],

    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        //this.addEventHandlers();
        this.render();
    },

    // addEventHandlers() {
    //     this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    // },

    // dropCart() {
    //     this.goods = [];
    //     this.render();
    // },

    render() {
        if (this.goods.length > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
        this.renderCountingBasket();
    },

    // getCartGoodsLength() {
    //     return this.goods.length;
    // },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>Цена за штуку: ${item.price} руб.</p>
                <p>Количество: ${item.quantity} шт.</p>
            </div>`;
    },

    renderCountingBasket() {
        let allProduct = 0;
        this.goods.forEach((product) => allProduct += product.quantity);
        this.cartBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} товар(ов) ${allProduct} шт. общей стоимостью стоимостью ${this.sumCountingBasket()} руб.`);
    },

    sumCountingBasket() {
        return cart.goods.reduce((accumulator, currentValue) => accumulator += currentValue.price * currentValue.quantity, 0);
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');

