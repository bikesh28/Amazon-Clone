class Cart{
    cartItems;
    #localStorageKey;

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage (){
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

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
    }

    saveToStorage() {
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
    }

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
    
    }

    removeFromCart(productId){
        const newCart =[];
    
        this.cartItems.forEach((cartItem) =>{
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    }

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

    updateCartQuantity(){
        let cartQunatity = 0;
        this.cartItems.forEach((cartItem)=>{
            cartQunatity += cartItem.quantity;
        });
        return cartQunatity;
    
    }

}
const cart = new Cart('cart-oop');
const businessCart = new cart('cart-business');








console.log(cart);
console.log(businessCart);





