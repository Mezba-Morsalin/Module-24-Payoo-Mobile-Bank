function getValueFromInput (id) {
    const input = document.getElementById(id)
    const inputValue = input.value;
    return inputValue;
}
function getBalance () {
    const getBalance = document.getElementById("current-balance");
    const currentBalance = getBalance.innerText;
    return Number(currentBalance);
}

function setBalance (value) {
    const setBalance = document.getElementById("current-balance");
    setBalance.innerText = value
}

function showOnly (show) {
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const transferMoney = document.getElementById("transfer-money");
    const payment = document.getElementById("payment");
    const getBonus = document.getElementById("get-bonus");
    const payBill = document.getElementById("pay-bill");
    const payMent = document.getElementById("payment");
    const history = document.getElementById("payment");

    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    payment.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    payMent.classList.add("hidden");
    history.classList.add("hidden");

    const showing = document.getElementById(show);
    
    showing.classList.remove("hidden");
}