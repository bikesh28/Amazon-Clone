import {cart, addToCart, updateCartQuantity} from '../data/cart.js';
import {products, loadProducts, loadProductsFetch} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

loadProducts(renderProductsGrid);

function renderProductsGrid(){

    let productsHTML = '' ;

    products.forEach((product)=>{
        
        productsHTML +=`
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                "${product.name}"
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="${product.getStarsUrl()}">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    "${product.getPrice()}"
                </div>

                <div class="product-quantity-container">
                    <select class="product-quantity-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                ${product.extraInfoHTML()}

                <div class="product-spacer"></div>

                <div class="added-to-cart added-to-cart-${product.id}">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart"
                data-product-id= "${product.id}"
                >
                    Add to Cart
                </button>
            </div>
        `
    })

    document.querySelector('.js-products-grid').
        innerHTML = productsHTML;


    function addedToCartMessage(productId){
        const addedToCartMessage = document.querySelector(`.added-to-cart-${productId}`);
                
            if (addedToCartMessage) {
                addedToCartMessage.classList.add('visible');

                setTimeout(() => {
                addedToCartMessage.classList.remove('visible');
                }, 1000);
                
            }
    }

    function updateCart(){
        document.querySelector('.js-cart-quantity')
            .innerHTML = updateCartQuantity();
    }
    updateCart();

    document.querySelectorAll('.js-add-to-cart')
        .forEach((button) => {
            button.addEventListener('click',() => {
                const productId = button.dataset.productId;
                addToCart(productId);

                updateCart(); 
            
                addedToCartMessage(productId);
                
            });
    });

}