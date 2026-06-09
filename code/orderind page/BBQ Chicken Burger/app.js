const decrementBtn = document.getElementById("incrementBtn");
const productQuantityLabel = document.getElementById("productQuantity");
const incrementBtn = document.getElementById("decrementBtn");
const productShowPrice = document.getElementById("productPrice");
const CartBtn = document.getElementById("b1");
const OrderBtn = document.getElementById("b2");
const deleteBtn = document.getElementById("deleteBtn");
const productQuantityContainer = document.getElementById("product_quantity");


const burger = document.getElementById("burger");
const c = document.getElementById("c");
const l = document.getElementById("l");
const o = document.getElementById("o");
const s = document.getElementById("s");
const t = document.getElementById("t");
const cl = document.getElementById("cl");
const co = document.getElementById("co");
const cs = document.getElementById("cs");
const ct = document.getElementById("ct");
const lo = document.getElementById("lo");
const ls = document.getElementById("ls");
const lt = document.getElementById("lt");
const os = document.getElementById("os");
const ot = document.getElementById("ot");
const st = document.getElementById("st");
const clo = document.getElementById("clo");
const cls = document.getElementById("cls");
const clt = document.getElementById("clt");
const cos = document.getElementById("cos");
const cot = document.getElementById("cot");
const cst = document.getElementById("cst");
const los = document.getElementById("los");
const lot = document.getElementById("lot");
const lst = document.getElementById("lst");
const ost = document.getElementById("ost");
const clos = document.getElementById("clos");
const clot = document.getElementById("clot");
const clst = document.getElementById("clst");
const cost = document.getElementById("cost");
const lost = document.getElementById("lost");
const clost = document.getElementById("clost");



const C = document.getElementById("chess");
const O = document.getElementById("onions");
const T = document.getElementById("tomatoes");
const L = document.getElementById("lettuce");
const S = document.getElementById("ketchup");

let item_selected = clost;


function hideBurger() {

          c.classList.add("hide");
          l.classList.add("hide");
          o.classList.add("hide");
          s.classList.add("hide");
          t.classList.add("hide");
          cl.classList.add("hide");
          co.classList.add("hide");
          cs.classList.add("hide");
          ct.classList.add("hide");
          lo.classList.add("hide");
          ls.classList.add("hide");
          lt.classList.add("hide");
          os.classList.add("hide");
          ot.classList.add("hide");
          st.classList.add("hide");
          clo.classList.add("hide");
          cls.classList.add("hide");
          clt.classList.add("hide");
          cos.classList.add("hide");
          cot.classList.add("hide");
          cst.classList.add("hide");
          los.classList.add("hide");
          lot.classList.add("hide");
          lst.classList.add("hide");
          ost.classList.add("hide");
          clos.classList.add("hide");
          clot.classList.add("hide");
          clst.classList.add("hide");
          cost.classList.add("hide");
          lost.classList.add("hide");
          clost.classList.add("hide");
          burger.classList.add("hide");
          
          

}
hideBurger()
burger.classList.remove("hide");



























































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


deleteBtn.onclick = function () {
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