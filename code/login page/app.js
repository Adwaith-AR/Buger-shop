console.log("poda");


document.getElementById("button").onclick = function () {
          if (document.getElementById("userName").value == "") {
                    document.getElementById("userName").placeholder = "Enter user name";
                    document.getElementById("userName").classList.add("red_place_holder");
                    setTimeout(() => {
                              document.getElementById("userName").classList.remove("red_place_holder");
                              document.getElementById("userName").placeholder = "Username or Email";
                    }, 2000);


          }
          else if (document.getElementById("password").value == "") {

                    document.getElementById("password").placeholder = `Enter Your Password`;
                    document.getElementById("password").classList.add("red_place_holder");
                    setTimeout(() => { 
                              document.getElementById("password").classList.remove("red_place_holder"); 
                              document.getElementById("password").placeholder = `Password`;
                    }, 2000);
                    
                    


          }
          else {
                    window.alert("You have Logged In");
          }
}