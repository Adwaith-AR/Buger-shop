const container = document.getElementById("grid_contaner")
const burgers = [
          ["Classic Beef Burger", "120"]
          , ["Cheese Burst Burger", "135"]
          , ["BBQ Chicken Burger", "145"]
          , ["Double Patty Monster", "160"]
          , ["Veg Supreme", "200"]
          , ["Spicy Mexican Burger", "180"]
          , ["Loaded Fries", "177"]
          , ["Cheese Fries", "155"]
          , ["Chicken Nuggets", "165"]
          , ["Peri Peri Wings", "170"]
          , ["Crispy Zinger", "199"]
          , ["Paneer Tikka Burger", "143"]]


const createdBurger = []
for (let i = 0; i < 10; i++) {
          window.console.log(createdBurger)
          createdBurger.push(`<a href="../orderind page/${burgers[i][0]}/index.html"><div class="grid_child"><img src="./img/${burgers[i][0]}.webp" alt=""><div ><h1>${burgers[i][0]}</h1><p>Delicious & freshly made</p><h3>₹${burgers[i][1]}</h3><button>Order Now</button></div></div></a>`)
}
container.innerHTML = createdBurger.join("")