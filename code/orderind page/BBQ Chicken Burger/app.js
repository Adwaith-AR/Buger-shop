const decrementBtn = document.getElementById("incrementBtn");
const productQuantityLabel = document.getElementById("productQuantity");
const incrementBtn = document.getElementById("decrementBtn");
const productShowPrice = document.getElementById("productPrice");
const CartBtn = document.getElementById("b1");
const OrderBtn = document.getElementById("b2");
const deleteBtn = document.getElementById("deleteBtn");
const productQuantityContainer = document.getElementById("product_quantity");
const burgerContainer = document.getElementById("bcontainer");



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

C.checked = true
O.checked = true
T.checked = true
L.checked = true
S.checked=true

let items = clost;





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
hideBurger();
burger.classList.remove("hide");

function burger_to_show(item_selected) {
          hideBurger()
          if (item_selected == "") {
                    hideBurger();
                    burger.classList.remove("hide");
          }
          else if (item_selected.includes("c")
                    && item_selected.includes("l") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    c.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    l.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    o.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    s.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    t.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    cl.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    co.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    cs.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    ct.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    lo.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    ls.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    lt.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    os.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    ot.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    st.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    clo.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    cls.classList.remove("hide");
          } else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    clt.classList.remove("hide");
          } else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    cos.classList.remove("hide");
          } else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    cot.classList.remove("hide");
          } else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    cst.classList.remove("hide");
          } else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    los.classList.remove("hide");
          } else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    lot.classList.remove("hide");
          } else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    lst.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    ost.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t") == false
          ) {
                    hideBurger();
                    clos.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s") == false
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    clot.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o") == false
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    clst.classList.remove("hide");
          }
          else if (item_selected.includes("l") == false
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    cost.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c") == false
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    lost.classList.remove("hide");
          }
          else if (item_selected.includes("l")
                    && item_selected.includes("c")
                    && item_selected.includes("o")
                    && item_selected.includes("s")
                    && item_selected.includes("t")
          ) {
                    hideBurger();
                    clost.classList.remove("hide");
          }
}

function collectData() {
          items = ""
          if (C.checked == false) {
                    items = items + "c"
          }
          if (O.checked == false) {
                    items = items + "o"
          }
          if (T.checked == false) {
                    items = items + "t"
          }
          if (L.checked == false) {
                    items = items + "l"
          }
          if (S.checked == false) {
                    items = items + "s"
          }
          burger_to_show(items)
}



C.onclick = function () {
          burgerContainer.classList.add("blur")

          setTimeout(() => {
                    collectData()
                    burgerContainer.classList.add("anti_blur")
                    burgerContainer.classList.remove("blur")

          }, 500);
          burgerContainer.classList.remove("anti_blur")
}
O.onclick = function () {
          burgerContainer.classList.add("blur")

          setTimeout(() => {
                    collectData()
                    burgerContainer.classList.add("anti_blur")
                    burgerContainer.classList.remove("blur")

          }, 500);
          burgerContainer.classList.remove("anti_blur")
}
T.onclick = function () {
          burgerContainer.classList.add("blur")

          setTimeout(() => {
                    collectData()
                    burgerContainer.classList.add("anti_blur")
                    burgerContainer.classList.remove("blur")

          }, 500);
          burgerContainer.classList.remove("anti_blur")
}
L.onclick = function () {
          burgerContainer.classList.add("blur")

          setTimeout(() => {
                    collectData()
                    burgerContainer.classList.add("anti_blur")
                    burgerContainer.classList.remove("blur")

          }, 500);
          burgerContainer.classList.remove("anti_blur")
}
S.onclick = function () {
          burgerContainer.classList.add("blur")

          setTimeout(() => {
                    collectData()
                    burgerContainer.classList.add("anti_blur")
                    burgerContainer.classList.remove("blur")

          }, 300);
          burgerContainer.classList.remove("anti_blur")
}


























































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