const userName = document.getElementById("userName");
const userPassword = document.getElementById("password");
const passBtn = document.getElementById("passBtn");
const imgInvisible = document.getElementById("imgInVisible");
const imgVisible = document.getElementById("imgVisible");
const submitBtn = document.getElementById("button")

const headerValue = `<ul><li><a href="https://buger-shop-six.vercel.app/">home</a></li><li><a href="https://buger-shop-six.vercel.app/Ordering%20meanu/index.html">menu</a></li><li><a href="https://buger-shop-six.vercel.app/About%20Us/index.html">about</a></li><li><a href="https://buger-shop-six.vercel.app/login%20page/index.html">login</a></li></ul>`
const NavTheme = document.getElementById("nav")
const themeBtn = document.getElementById("themeBtn")
let themeBtnState = "dark"

if (localStorage.getItem("theme") == "null") {
          localStorage.setItem("theme", "light")
}
else if (localStorage.getItem("theme") == "dark") {
          document.body.setAttribute("data-theme", "dark")
          NavTheme.innerHTML = `<img id="logo" src="../img/logo.webp" alt="logo">${headerValue}<button id="themeBtn"><img id="themeIcon" src="../img/moon.png" alt=""></button>`
}
else {
          document.body.setAttribute("data-theme", "light")
          NavTheme.innerHTML = `<img id="logo" src="../img/logoDark.webp" alt="logo">${headerValue}<button id="themeBtn"><img id="themeIcon" src="../img/sun.png" alt=""></button>`
}
themeBtn.addEventListener('click', () => {

          if (localStorage.getItem("theme") == "dark") {
                    localStorage.setItem("theme", "light")
                    document.body.setAttribute("data-theme", "light")
                    NavTheme.innerHTML = `<img id="logo" src="../img/logo.webp" alt="logo">${headerValue}<button id="themeBtn"><img id="themeIcon" src="../img/moon.png" alt=""></button>`

          }
          else {
                    localStorage.setItem("theme", "dark")
                    document.body.setAttribute("data-theme", "dark")
                    NavTheme.innerHTML = `<img id="logo" src="../img/logoDark.webp" alt="logo">${headerValue}<button id="themeBtn"><img id="themeIcon" src="../img/sun.png" alt=""></button>`
          }

})

let passVisibility = false;

imgVisible.classList.add("invisibility")

submitBtn.onclick = function () {
          if (userName.value == "") {
                    userName.placeholder = "Enter user name";
                    userName.classList.add("red_place_holder", "orange_border");

                    setTimeout(() => {
                              userName.classList.remove("red_place_holder");
                              userName.placeholder = "Username or Email";
                    }, 2000);



          }
          else if (userPassword.value == "") {

                    userPassword.placeholder = `Enter Your Password`;
                    userPassword.classList.add("red_place_holder");
                    setTimeout(() => {
                              userPassword.classList.remove("red_place_holder");
                              userPassword.placeholder = `Password`;
                    }, 2000);




          }
          else {
                    userName.value = "";
                    userPassword.value = "";
                    window.alert("You have Logged In");
          }
}



passBtn.onclick = function () {
          if (passVisibility) {
                    passVisibility = false;
                    imgVisible.classList.add("invisibility")
                    imgInvisible.classList.remove("invisibility")
                    userPassword.type = "password"
          }
          else {
                    userPassword.type = "text"
                    passVisibility = true;
                    imgVisible.classList.remove("invisibility")
                    imgInvisible.classList.add("invisibility")

          }
}