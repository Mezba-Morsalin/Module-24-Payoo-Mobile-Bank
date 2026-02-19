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