const decrementBtn = document.getElementById("incrementBtn");
const productQuantityLabel = document.getElementById("productQuantity");
const incrementBtn = document.getElementById("decrementBtn");
const productShowPrice = document.getElementById("productPrice");
const CartBtn = document.getElementById("b1");
const OrderBtn = document.getElementById("b2");
const deleteBtn = document.getElementById("deleteBtn");
const productQuantityContainer = document.getElementById("product_quantity");
let productQuantity = 1;

let productCost = Number(productShowPrice.textContent.slice(1));
productQuantityContainer.classList.add("orientation");
deleteBtn.classList.add("invisibility");




incrementBtn.onclick = function () {
          productQuantity++;
          productQuantityLabel.textContent = productQuantity;
          productShowPrice.textContent = "₹" + (productQuantity * productCost);
}
decrementBtn.onclick = function () {
          if (productQuantity == 1) {
                    window.alert("");
          }
          else {
                    productQuantity--;
                    productQuantityLabel.textContent = productQuantity;
                    productShowPrice.textContent = "₹" + (productQuantity * productCost);
          }
}


deleteBtn.onclick = function(){
          productQuantity = 1;
          productQuantityLabel.textContent = productQuantity;
          productShowPrice.textContent = "₹" + (productQuantity * productCost);
          productQuantityContainer.classList.add("orientation");
          deleteBtn.classList.add("invisibility");
}

setInterval(() => {
          if (productQuantity != 1) {
                    productQuantityContainer.classList.remove("orientation");
                    deleteBtn.classList.remove("invisibility");


          }
          else {
                    productQuantityContainer.classList.add("orientation");
                    deleteBtn.classList.add("invisibility");

          }
}, 100); // Checks every 100ms


CartBtn.onclick = function () {
          productQuantity = 1;
          productQuantityLabel.textContent = productQuantity;
          productShowPrice.textContent = "₹" + (productQuantity * productCost);
          window.alert("Your order is added to the cart")

}
OrderBtn.onclick = function () {
          productQuantity = 1;
          productQuantityLabel.textContent = productQuantity;
          productShowPrice.textContent = "₹" + (productQuantity * productCost);
          window.alert("Your order is Registered")

}