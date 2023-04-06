
const cartIc = document.querySelector('#cart-icon');
const cartCount = document.querySelector('.cart-count');

function incrementCartCount(title) {
    const cartItems = document.getElementsByClassName('cart-content')[0];
    const cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (let i = 0; i < cartItemsNames.length; i++) {  
      if (cartItemsNames[i].innerText == title) {
        // Le produit est déjà dans le panier, ne pas incrémenter le compteur
        return;
      }
    }
  
    // Le produit n'est pas dans le panier, incrémenter le compteur
    let count = parseInt(cartCount.textContent) + 1;
    cartCount.textContent = count;
  }

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // Récupérer le titre du produit à partir de l'élément parent du bouton
      const buttons = event.target;
      const products = buttons.parentElement.parentElement.parentElement;
      const title = products.getElementsByClassName('product-title')[0].innerText;


      // Appeler la fonction incrementCartCount avec le titre du produit
      incrementCartCount(title);
    });
  });
});



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
    const removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    // change quantity
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    // add product
    const addCart = document.getElementsByClassName('add-cart');
    for (let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener('click', addCartClicked)
    }
}
// function removeCartItem
function removeCartItem(event){
    const buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updateTotal();
    // Decrement the number of items displayed in the cart
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = parseInt(cartCountElement.textContent);
    cartCount--;
    cartCountElement.textContent = cartCount;
    }

    //function quantity 
    function quantityChanged(event){
        let input = event.target;
        if(isNaN(input.value) || input.value <=0){
            input.value = 1;
        }
        updateTotal();
    }

    // function add product
    function addCartClicked(event){
        const buttons = event.target;
        const products = buttons.parentElement.parentElement.parentElement;
        const title = products.getElementsByClassName('product-title')[0].innerText;
        const price = products.getElementsByClassName('price')[0].innerText;
        const productImg = products.getElementsByClassName('product-img')[0].src;
    
        addProductsToCart(title, price, productImg);
        updateTotal();
    }

    function addProductsToCart(title, price, productImg){
        const cartShopBox = document.createElement('div');
        cartShopBox.classList.add('cart-box');
        const cartItems = document.getElementsByClassName('cart-content')[0];
        const cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
        for (let i = 0; i < cartItemsNames.length; i++){
            if(cartItemsNames[i].innerText == title){
            alert('Vous avez déja ajouté ce produit au panier.');
            return;
        }
        }
        alert('Le produit a été ajouté au panier.');
        const cartBoxContent = `<img src="${productImg}" alt="cart-img" class="cart-img">
        <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
        </div>
        <i class="fa-regular fa-trash-can cart-remove"></i>`

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    }
   
   

// function total
function updateTotal() {
    const cartContent = document.getElementsByClassName('cart-content')[0];
    const cartBoxs = document.getElementsByClassName('cart-box');
    let total = 0;
    if (cartBoxs.length === 0) {
        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
        document.querySelector('.cash').textContent = '$' + total;
    } else {
        for (let i = 0; i < cartBoxs.length; i++) {
            let cartBox = cartBoxs[i];
            const priceElement = cartBox.getElementsByClassName('cart-price')[0];
            const quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            const price = parseFloat(priceElement.innerText.replace('$', ''));
            const quantity = quantityElement.value;
            total = total + (price * quantity);
        }
        // cent value 
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
        // Update the cash element with the total price
        document.querySelector('.cash').textContent = '$' + total;
    }
}

