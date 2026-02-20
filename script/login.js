document.getElementById("login-btn").addEventListener("click", function () {

    const numberValue = document.getElementById("input-tel").value;
    const pinValue = document.getElementById("input-pin").value;

    if (numberValue.length === 11 && pinValue.length === 4) {
        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login");
    }
});