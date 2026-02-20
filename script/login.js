document.getElementById("login-btn").addEventListener("click", function () {

    const inputNumber = document.getElementById("input-tel");
    const numberValue = inputNumber.value;

    const inputPin = document.getElementById("input-pin");
    const pinValue = inputPin.value;

    if (numberValue.length === 11 && pinValue.length === 4) {

        alert("Login Successful");

        window.location.assign("dashboard.html");

    } else {
        alert("Invalid Login");
    }
});