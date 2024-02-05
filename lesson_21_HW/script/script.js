
const addProductNode = document.querySelector("#add_product");
let products = [];

addProductNode.addEventListener("submit", event => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = +event.target.price.value;
    const count = +event.target.count.value;
    const product = { title, price, count };
    products.push(product);
    event.target.reset();
    rerender();
});

function createProductCard(title, price, count) {
    const containerNode = document.createElement('div');
    containerNode.classList.add("product_cart")
    const titleNode = document.createElement('p');
    const priceNode = document.createElement('p');
    const countNode = document.createElement('p');
    titleNode.innerText = title;
    priceNode.innerText = price;
    countNode.innerText = count;

    const btnNode = document.createElement('button');
    btnNode.classList.add("btnNode")
    btnNode.innerText = "удалить";
    btnNode.addEventListener("click", () => remove(title));

    countNode.innerText = count === 0 ? "Товар кончился" : count;
    containerNode.style.backgroundColor = count === 0 ? "#fab1a0" : "#55efc4";

    const plusBtn = document.createElement('button');
    plusBtn.classList.add("qtyBtn")
    plusBtn.innerText = '+';
    plusBtn.addEventListener("click", () => {
        updateQty(title, count + 1);
    });

    const minusBtn = document.createElement('button');
    minusBtn.classList.add("qtyBtn")
    minusBtn.innerText = '-';
    minusBtn.addEventListener("click", () => {
        updateQty(title, Math.max(count - 1, 0));
    });

    containerNode.append(titleNode, priceNode, countNode, plusBtn, minusBtn, btnNode);
    return containerNode;
}

function remove(title) {
    const newProductsArray = products.filter(product => product.title !== title);
    products = newProductsArray;
    rerender();
}

function updateQty(title, newQty) {
    const productUpdate = products.find(product => product.title === title);
    if (productUpdate) {
        productUpdate.count = newQty;
        rerender();
    }
}

function rerender() {
    const productsNode = document.querySelector('.products');
    productsNode.innerText = "";
    if (products.length === 0) {
        const noProductsNode = document.createElement('p');
        noProductsNode.innerText = 'Товаров нет';
        productsNode.append(noProductsNode);
    } else {
        products.forEach(({ title, price, count }) => productsNode.append(createProductCard(title, price, count)));
    }
}

