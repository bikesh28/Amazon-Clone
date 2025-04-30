export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        },{
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
        }
    ];
}

//storing cart to local storage

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}


//function to add product to cart
export function addToCart(productId){
    let matchingItem;
            
    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    let productQuantity=document.querySelector(`.product-quantity-${productId}`).value; 
    let productQuantityNumber = Number(productQuantity);

    if(matchingItem){
        matchingItem.quantity += productQuantityNumber;
    }else{
        cart.push({
            productId : productId,
            quantity: productQuantityNumber,
            deliveryOptionId: '1'
        });
    }
    saveToStorage();

}


//function to delete product from cart
export function removeFromCart(productId){
    const newCart =[];

    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

//updating cart quantity after adding or deleting 
export function updateCartQuantity(){
    let cartQunatity = 0;
    cart.forEach((cartItem)=>{
        cartQunatity += cartItem.quantity;
    });
    return cartQunatity;

}
