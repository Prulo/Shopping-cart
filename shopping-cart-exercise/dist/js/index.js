var productButtons = document.querySelectorAll("button");
var shoppingCart = [];
var cart = document.querySelector("#cart");
var openCartButton = document.querySelector("#open-cart");
function updateCart() {
    var productsInCart = document.getElementById("productsInCart");
    productsInCart.textContent = shoppingCart.length.toString();
}
function addClickEvent() {
    Array.from(productButtons).forEach(function (button) {
        button.addEventListener("click", function () {
            var productName = button.getAttribute("data-product");
            console.log(productName);
            if (productName) {
                // Check if the product is already in the shopping cart
                var index = shoppingCart.indexOf(productName);
                if (index !== -1) {
                    // If the product is in the cart, you can handle it accordingly
                    console.log("".concat(productName, " is already in the cart"));
                }
                else {
                    // If the product is not in the cart, add it
                    shoppingCart.push(productName);
                    updateCart();
                    listProductsInCart();
                }
            }
        });
    });
}
function listProductsInCart() {
    var productsList = document.getElementById("products");
    productsList.innerHTML = "";
    // Add each product to the list
    shoppingCart.forEach(function (product) {
        var li = document.createElement("li");
        li.textContent = product;
        productsList.appendChild(li);
    });
}
function openCart() {
    var cartWrapper = document.getElementById("cart");
    cartWrapper.classList.toggle("hide");
}
var openCartButtonHTMLElement = document.getElementById("open-cart");
if (openCartButton) {
    openCartButton.addEventListener("click", openCart);
}
updateCart();
listProductsInCart();
addClickEvent();
