import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/backend-practice.js';
// import '../data/cart-oop.js';


async function loadPage() {
    console.log('load page');
    
}



/*

new Promise((resolve) =>{
    loadProducts(() =>{
        resolve();
    });


}).then(() =>{
    return new Promise((resolve) =>{
        loadCart(() => {
            resolve();

        });
    }); 


}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*

loadProducts(() =>{
    loadCart(() =>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/