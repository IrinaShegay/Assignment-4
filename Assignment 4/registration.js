  


  function valid(){  

    var name = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("password2").value;
      
    if( name == "") {
        document.getElementById("error").innerHTML = "Fill the first name.";
        return false;
    }

    if(p1 == "") {
        document.getElementById("error1").innerHTML = "Fill the password.";
        return false;
      }

    if(p2 == "") {
        document.getElementById("error2").innerHTML = "Fill the password again.";
        return false;
      } 
    
    if(p1 != p2) {
        document.getElementById("error2").innerHTML = "Passwords are not same.";
        return false;
    }
    
    let input = document.querySelector(".input");
    let button = document.querySelector(".button");
    button.disabled = true;
    input.addEventListener("change", bottom);
    function bottom() {
    if(document.querySelector(".input").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

        alert("Registration has been submitted successfully");
} 
  
