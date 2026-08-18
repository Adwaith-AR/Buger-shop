const themeBtn = document.getElementById("themeBtn")
let themeBtnState = "dark"

if (localStorage.getItem("theme") == "null") {
          localStorage.setItem("theme", "light")
}
else if (localStorage.getItem("theme") == "dark") {
          document.body.setAttribute("data-theme", "dark")
          themeBtn.innerHTML = `<img id="themeIcon" src="./img/moon.png" alt="">`
}
else {
          document.body.setAttribute("data-theme", "light")
          themeBtn.innerHTML = `<img id="themeIcon" src="./img/sun.png" alt="">`
}
themeBtn.addEventListener('click', () => { 
          if (themeBtnState == "dark") { 
                    themeBtnState = "light"
                    localStorage.setItem("theme","light") 
                    document.body.setAttribute("data-theme", "light")
                    themeBtn.innerHTML = `<img id="themeIcon" src="./img/sun.png" alt="">`

          }
          else if (themeBtnState == "light") { 
                    themeBtnState = "dark"
                    localStorage.setItem("theme","dark") 
                    document.body.setAttribute("data-theme", "dark")
                    themeBtn.innerHTML = `<img id="themeIcon" src="./img/moon.png" alt="">`
          }

})