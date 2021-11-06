const menuToggle = (idToggleMenu, idNavbar) => {
  const $menuIcon = document.getElementById(idToggleMenu);
  const $menu = document.getElementById(idNavbar);
  if ($menuIcon && $menu) {
    $menuIcon.addEventListener("click", () => {
      $menu.classList.toggle("menu--active");
      const icon = $menu.matches(".menu--active") ? "icon-close" : "icon-menu";
      $menuIcon.children[0].src = `./images/${icon}.svg`;
    });
  }
};

const setQuantity = (number) => {
  const currentQuantity = parseInt($quantity.textContent);
  const newQuantity = currentQuantity + number;

  $quantity.textContent = `${newQuantity == 0 ? 1 : newQuantity}`;
};
const $cartItem = document.getElementById("cart-item").content;
const $quantity = document.getElementById("quantity");
const $countCart = document.getElementById("count-cart");
console.log($cartItem);

const products = [{}];
let cart = [];
let countImages = 1;

document.addEventListener("click", (e) => {
  if (e.target.closest("#btnDecrement")) {
    setQuantity(-1);
  }
  if (e.target.closest("#btnIncrement")) {
    setQuantity(1);
  }

  if (e.target.closest("#btnAddCard")) {
    document.querySelector("#cart-list").textContent = "";
    let quantity = parseInt($quantity.textContent);
    let prices = parseFloat(
      document.querySelector(".prices").textContent.slice(1)
    ).toFixed(2);
    let name = document.querySelector(".product-title").textContent;
    let total = (quantity * prices).toFixed(2);

    cart = [...cart, { name, prices, total, quantity }];
    document.querySelector(".count-cart").textContent = quantity;
    $fragment = document.createDocumentFragment();
    $cloneCartItem = $cartItem.cloneNode(true);
    $cloneCartItem.querySelector(".cartQuantity").textContent = quantity;
    $cloneCartItem.querySelector(".cart-item-product__result").textContent =
      total;
    $fragment.appendChild($cloneCartItem);
    document.querySelector("#cart-list").appendChild($fragment);

    if (cart.length > 0) {
      document.querySelector(".text-empty").style.display = "none";
      document.querySelector("#btnCheckout").classList.remove("btn-Checkouts");
    }
  }

  if (e.target.closest(".btncart")) {
    document.querySelector("#cart").classList.toggle("d-none");
  }

  if(e.target.closest(".right")){
    countImages ++;
    if(countImages > 4){
      countImages = 1;
    }

    document.querySelector(".image-product").src = `./images/image-product-${countImages}.jpg`;
  }
  if(e.target.closest(".left")){
    countImages --;
    if(countImages < 1){
      countImages = 4;
    }

    document.querySelector(".image-product").src = `./images/image-product-${countImages}.jpg`;
  }
  if(e.target.matches(".list-thumbnails-item img")){
    document.querySelector(".image-product").src = `./images/image-product-${e.target.dataset.item}.jpg`;
  }
});

//./images/image-product-1.jpg
menuToggle("icon-menu", "container-menu");
