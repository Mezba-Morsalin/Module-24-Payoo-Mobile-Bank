document.getElementById("dashboard-btn").addEventListener("click", function (){
    window.location.replace("/index.html")
})
const items = document.getElementsByClassName("div")
    for (const item of items) {
        item.addEventListener("click", function () {
            item.style.backgroundColor = "#f3f8fe"
            item.style.border = "1px solid #0874f2"

            const items2 = item.getElementsByClassName("p");
            for (const item2 of items2) {
            item2.style.color = "#0874f2";
            item2.style.fontWeight = "bold";
        }
    })
        
}
// Cash Out 
document.getElementById("cash-out-btn").addEventListener("click", function () {
    const agentNumber = getValueFromInput("cash-out-tel");
    if (agentNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }
    const cashOutAmount = Number(getValueFromInput("cash-out-amount"));
    const currentBalance = document.getElementById("current-balance");
    const currentBalanceValue = Number(currentBalance.innerText);
    
    if (cashOutAmount > currentBalanceValue) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("cash-out-pin");
    
    if (pin.length !== 4) {
        alert("Invalid Pin");
        return;
    }

    const updateBalance = currentBalanceValue - cashOutAmount;
    currentBalance.innerText = updateBalance;

    alert("Cash Out Successful")
})