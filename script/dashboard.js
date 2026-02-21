document.getElementById("dashboard-btn").addEventListener("click", function (){
    window.location.replace("index.html")
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
    const agentNumber = getValueFromInput("cash-out-tel")
    if (agentNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }

    const cashOutAmount = Number(getValueFromInput("cash-out-amount"))
    const currentBalance = getBalance("current-balance");
    
    if (cashOutAmount > currentBalance) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("cash-out-pin");

    if (pin.length !== 4) {
        alert("Invalid Pin");
        return;
    }
    const updateBalance = currentBalance - cashOutAmount;
    setBalance(updateBalance);
    const time = new Date().toLocaleString()
    alert(`Cash Out Successful $${cashOutAmount} From Payoo Agent ${agentNumber} at ${time}`);

    const history = document.getElementById("transaction-history");

    const newHistory = document.createElement("div")
    newHistory.innerHTML = `
    <div class="w-11/12 mx-auto flex justify-between gap-3 items-center rounded-2xl p-4  bg-base-200">
            <div class="flex items-center gap-5">
                <div class= rounded-full">
                    <img class="w-[40px]" src="./assets/opt-1.png" alt="">
                </div>
                <div class="transaction-class rounded-2xl">
                Cash Out Successful $${cashOutAmount} From Payoo Agent ${agentNumber} at ${time}
            </div>
            </div>
            <span class="cursor-pointer text-[#080808]/70"><i class="fa-solid fa-ellipsis"></i></span>
        </div>
    `
    history.append(newHistory)
})
// Add Money
document.getElementById("add-money-btn").addEventListener("click", function () {
    const selectBank = getValueFromInput("add-money-bank");
    if (selectBank === "Select Bank") {
        alert("Please Select a Bank");
        return;
    }

    const bankAccountNo = getValueFromInput("add-money-tel");
    if (bankAccountNo.length !== 11) {
        alert("Invalid Account Number");
        return;
    }
    
    const addMoneyAmount = Number(getValueFromInput("add-money-amount"));
    if (addMoneyAmount <= 0) {
        alert("Enter a Valid Amount");
        return;
    }
    const currentBalance = getBalance("current-balance")

    const pin = getValueFromInput("add-money-pin");
    if (pin.length !== 4) {
        alert("Invalid Pin");
        return;
    }

    const updateBalance = currentBalance + addMoneyAmount;
    setBalance(updateBalance);
    const time = new Date().toLocaleString();

    alert(`Your Money Added Successfully $${addMoneyAmount} From ${selectBank} at ${time}`)

    const history = document.getElementById("transaction-history");
    const newHistory = document.createElement("div");

    newHistory.innerHTML =`
    <div class="w-11/12 mx-auto flex justify-between gap-3 items-center rounded-2xl p-4  bg-base-200">
            <div class="flex items-center gap-5">
                <div class= rounded-full">
                    <img class="w-[40px]" src="./assets/opt-1.png" alt="">
                </div>
                <div class="transaction-class rounded-2xl">
                Your Money Added Successfully $${addMoneyAmount}  From ${selectBank} at ${time}
            </div>
            </div>
            <span class="cursor-pointer text-[#080808]/70"><i class="fa-solid fa-ellipsis"></i></span>
        </div>
    `
    history.append(newHistory)
})
// Transfer Money
document.getElementById("transfer-money-btn").addEventListener("click", function () {
    const userNumber = getValueFromInput("transfer-money-tel");
    if (userNumber.length !== 11) {
        alert("Invalid Number");
        return;
    }

    const transferAmount = Number(getValueFromInput("transfer-money-amount"));
    const currentBalance = getBalance("current-balance");
    if (transferAmount <= 0) {
        alert("Enter a Valid Amount");
        return;
    }
    if (transferAmount > currentBalance) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("transfer-money-pin");
    if (pin.length !== 4) {
        alert("Invalid Pin");
        return;
    }

    const updateBalance = currentBalance - transferAmount;
    setBalance(updateBalance);

    const time = new Date().toLocaleString()

    alert(`Money Transfer Successfully $${transferAmount} to ${userNumber} at ${time}`)

    const history = document.getElementById("transaction-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="w-11/12 mx-auto flex justify-between gap-3 items-center rounded-2xl p-4  bg-base-200">
            <div class="flex items-center gap-5">
                <div class= rounded-full">
                    <img class="w-[40px]" src="./assets/opt-1.png" alt="">
                </div>
                <div class="transaction-class rounded-2xl">
                Money Transfer Successfully $${transferAmount} to User Number ${userNumber} at ${time}
            </div>
            </div>
            <span class="cursor-pointer text-[#080808]/70"><i class="fa-solid fa-ellipsis"></i></span>
        </div>
    `
    history.append(newHistory);
})
// Get bonus
document.getElementById("get-bonus-btn").addEventListener("click", function () {
    const bonusCode = getValueFromInput("get-bonus-amount");
    const time = new Date().toLocaleString();
    if (bonusCode === "mejbah123") {
        const  currentBalance = getBalance("current-balance")
        const updateBalance = currentBalance + 500;
        setBalance(updateBalance)
        alert(`Congratulations You Have Won 500$ ${time}`)
    }
    else {
        alert("Invalid Coupon")
    }
    const history = document.getElementById("transaction-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `<div class="w-11/12 mx-auto flex justify-between items-center rounded-2xl p-4  bg-base-200">
            <div class="flex justify-center items-center gap-5">
                <div class= rounded-full">
                    <img class="w-[40px]" src="./assets/opt-1.png" alt="">
                </div>
                <div class="transaction-class  rounded-2xl">
                Congratulations You Have Won 500$ ${time}
            </div>
            </div>
            <span class="cursor-pointer text-[#080808]/70"><i class="fa-solid fa-ellipsis"></i></span>
        </div>`
    history.append(newHistory)
})
// Pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function () {
    const selectBank = getValueFromInput("pay-bill-bank");
    if (selectBank === "Select Bank") {
        alert("Please Select a Bank");
        return;
    }
    const payBillNumber = getValueFromInput("pay-bill-tel"); {
        if (payBillNumber.length !== 11) {
            alert("Invalid Number");
            return;
        }
    }
    const payBillAmount = Number(getValueFromInput("pay-bill-amount"));
    const currentBalance = getBalance("current-balance");
    if (payBillAmount <= 0) {
        alert("Enter a Valid Amount");
        return;
    }
    if (payBillAmount > currentBalance) {
        alert("Insufficient Balance");
        return;
    }
    const pin = getValueFromInput("pay-bill-pin");
    if (pin.length !== 4) {
        alert("Invalid Pin");
        return;
    }
    const updateBalance = currentBalance - payBillAmount;
    setBalance(updateBalance);
    const time = new Date().toLocaleString()
    alert(`Bill is Successfully Paid From ${selectBank} ${time}`)

    const history = document.getElementById("transaction-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="w-11/12 mx-auto flex justify-between gap-3 items-center rounded-2xl p-4  bg-base-200">
            <div class="flex items-center gap-5">
                <div class= rounded-full">
                    <img class="w-[40px]" src="./assets/opt-1.png" alt="">
                </div>
                <div class="transaction-class rounded-2xl">
                Bill is Successfully Paid $${payBillAmount} From ${selectBank} ${time}
            </div>
            </div>
            <span class="cursor-pointer text-[#080808]/70"><i class="fa-solid fa-ellipsis"></i></span>
        </div>
    `
    history.append(newHistory);
})