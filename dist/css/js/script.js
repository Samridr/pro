

let cartIcon = document.querySelector('#cart-icon');
let cartText = document.querySelector('#cart-text');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

cartText.onclick = () => {
    cart.classList.add("active");
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};
// cart fonctionality
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}
// function ready
function ready (){
    var  removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
}
// function removeCartItem
function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    }