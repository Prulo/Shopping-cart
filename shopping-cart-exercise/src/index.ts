const productButtons: NodeList = document.querySelectorAll("button");
const shoppingCart: (string | null)[] = [];
const cart: HTMLElement | null = document.querySelector("#cart");
const openCartButton: HTMLElement | null = document.querySelector("#open-cart");

function updateCart(): void {
  const productsInCart = document.getElementById("productsInCart");
  productsInCart.textContent = shoppingCart.length.toString();
}

function addClickEvent(): void {
  Array.from(productButtons as NodeListOf<HTMLElement>).forEach((button) => {
    button.addEventListener("click", () => {
      const productName: string = button.getAttribute("data-product");
      console.log(productName);

      if (productName) {
        const index = shoppingCart.indexOf(productName);
        if (index !== -1) {
          console.log(`${productName} is already in the cart`);
        } else {
          shoppingCart.push(productName);
          updateCart();
          listProductsInCart();
        }
      }
    });
  });
}

function listProductsInCart(): void {
  const productsList = document.getElementById("products");
  productsList.innerHTML = "";
  shoppingCart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    productsList.appendChild(li);
  })
}

function openCart() {
  const cartWrapper = document.getElementById("cart");
  cartWrapper.classList.toggle("hide");
}
const openCartButtonHTMLElement = document.getElementById("open-cart");
if (openCartButton) {
  openCartButton.addEventListener("click", openCart);
}

updateCart();
listProductsInCart();


addClickEvent();
