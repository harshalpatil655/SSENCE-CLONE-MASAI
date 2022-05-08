document.querySelector("form").addEventListener("submit", signUpFun)

var userData = JSON.parse(localStorage.getItem("users")) || []

function signUpFun() {
    event.preventDefault();

    var userObj = {
        name: document.querySelector("#fname").value,
        name: document.querySelector("#lname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#opass").value,
        phone: document.querySelector("#npass").value,
    };
    // console.lof(userObj)
    userData.push(userObj)
    console.log(userData)

    if (document.querySelector("#email").value == "") {
        alert("Please enter correct details")
    }
    else {
        alert("Sign Up Succesfully")
        window.location.href = "login.html"
        localStorage.setItem("users", JSON.stringify(userData))
    }

}