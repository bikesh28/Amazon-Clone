export const cart = [];

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
                    quantity: productQuantityNumber
                });
            }

}


