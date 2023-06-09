quantityControlsInc = document.querySelectorAll('.product__quantity-control_inc')
quantityControlsDec = document.querySelectorAll('.product__quantity-control_dec')
addButtons = document.querySelectorAll('.product__add')
cart = document.querySelector('.cart__products')

for (let control of quantityControlsInc) {
    control.addEventListener('click', () => {
        control.previousElementSibling.textContent = Number(control.previousElementSibling.textContent) + 1
    })
}

for (let control of quantityControlsDec) {
    control.addEventListener('click', () => {
        if (Number(control.nextElementSibling.textContent) > 1) {
            control.nextElementSibling.textContent = Number(control.nextElementSibling.textContent) - 1
        }
    })
}

function addExistingProduct(cart, product) {
    flag = true
    for (item of cart.querySelectorAll('.cart__product')) {
        if (item.getAttribute('data-id') == product.getAttribute('data-id')) {
            cartCount = Number(item.querySelector('.cart__product-count').textContent)
            productCount = Number(product.querySelector('.product__quantity-value').textContent)
            item.querySelector('.cart__product-count').textContent = cartCount + productCount
            flag = false
        }
    }
    return flag
}

for (let button of addButtons) {
    button.addEventListener('click', () => {
        product = button.closest('.product')
        if (addExistingProduct(cart, product)) {
            message = `
            <div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${product.children[1].getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
            </div>  
            `
            cart.insertAdjacentHTML('beforeend', message)
        }
    })
}