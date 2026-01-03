let total = 0;

function addExpense() {

    let item = document.getElementById("item").value;
    let amount = Number(document.getElementById("amount").value);

    if(item === "" || amount <= 0) return;

    let li = document.createElement("li");
    li.innerText = item + " - ₹" + amount;

    document.getElementById("list").appendChild(li);

    total += amount;
    document.getElementById("total").innerText = "Total Spent: ₹" + total;

    document.getElementById("item").value = "";
    document.getElementById("amount").value = "";
}
