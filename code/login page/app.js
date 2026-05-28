const userName = document.getElementById("userName");
const userPassword = document.getElementById("password");
const passBtn = document.getElementById("passBtn");
const imgInvisible = document.getElementById("imgInVisible");
const imgVisible = document.getElementById("imgVisible");
const submitBtn = document.getElementById("button")




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