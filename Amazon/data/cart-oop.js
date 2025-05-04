const cart = {
    cartItems : undefined,

    loadFromStorage (){
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));

        if(!this.cartItems){
            this.cartItems = [
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 3,
                    deliveryOptionId: '1'
                },{
                    productId: '54e0eccd-8f36-462b-b68a-8182611d9add',
                    quantity: 2,
                    deliveryOptionId: '2'
                }
            ];
        }
    },
    
    saveToStorage() {
        localStorage.setItem('cart-oop',JSON.stringify(this.cartItems));
    },

    addToCart(productId){
        let matchingItem;
                
        this.cartItems.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        let productQuantity=document.querySelector(`.product-quantity-${productId}`).value; 
        let productQuantityNumber = Number(productQuantity);
    
        if(matchingItem){
            matchingItem.quantity += productQuantityNumber;
        }else{
            this.cartItems.push({
                productId : productId,
                quantity: productQuantityNumber,
                deliveryOptionId: '1'
            });
        }

        this.saveToStorage();
    
    },

    removeFromCart(productId){
        const newCart =[];
    
        this.cartItems.forEach((cartItem) =>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
                
        this.cartItems.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }


};



//storing cart to local storage


//function to add product to cart



//function to delete product from cart


//updating cart quantity after adding or deleting 
export function updateCartQuantity(){
    let cartQunatity = 0;
    cart.forEach((cartItem)=>{
        cartQunatity += cartItem.quantity;
    });
    return cartQunatity;

}



