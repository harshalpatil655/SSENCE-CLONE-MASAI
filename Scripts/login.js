document.querySelector("form").addEventListener("submit", loginFun)

var regdUsers = JSON.parse(localStorage.getItem("users")) || [];


function loginFun() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    

    console.log(enteredEmail)

    var flag = false;

    for (var i = 0; i < regdUsers.length; i++) {
        console.log(regdUsers[i]);
        if (
            regdUsers[i].email == enteredEmail 
           

        ) {
            flag = true

            break;
        }
        else {
            flag = false

        }
    }

    var enteredPass = document.querySelector("#password").value

    console.log(enteredPass)

    var flag1 = false;

    for (var i = 0; i < regdUsers.length; i++) {
        console.log(regdUsers[i]);
        if (regdUsers[i].password == enteredPass) {
            flag1 = true

            break;
        }


        else {
            flag1 = false
        }
    }



    if (flag && flag1) {
        alert("Account Verified");
        window.location.href = "/akshay.html";

    }
    else {
        alert("Account Verification failed")
        window.location.reload()
    }
}
    
    // document.querySelector("form").addEventListener("submit", passFun)
   
    // var regdUsers = JSON.parse(localStorage.getItem("users")) || [];

    // function passFun() {
    //     event.preventDefault();
    //     var enteredPass = document.querySelector("#password").value

    //     console.log(enteredPass)

    //     var flag = false;

    //     for (var i = 0; i < regdUsers.length; i++) {
    //         console.log(regdUsers[i]);
    //         if (regdUsers[i].password == enteredPass) {
    //             flag = true

    //             break;
    //         }


    //         else {
    //             flag = false
    //         }
    //     }
    //     if (flag) {
    //         alert("Login Succesfully");
    //         window.location.href = "index.html";
    //     }
    //     else {
    //         alert("Password Incorrect")
    //         window.location.reload()
    //     }
    // }
