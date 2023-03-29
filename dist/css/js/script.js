

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
    // change quantity
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}
// function removeCartItem
function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updateTotal();
    }

    //function quantity 
    function quantityChanged(event){
        var input = event.target;
        if(isNaN(input.value) || input.value <=0){
            input.value = 1;
        }
        updateTotal();
    }

// function total
function updateTotal (){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxs = document.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxs.length; i++){
        var cartBox = cartBoxs[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);

    // cent value 
    total = Math.round(total * 100) / 100; 

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}