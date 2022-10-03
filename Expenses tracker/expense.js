const itemEl = document.getElementById("item")
const descEl = document.getElementById("description")
const amountEl = document.getElementById("amount")
const saveExpense = document.getElementById("save-expense")
const displayEl = document.getElementById("display")
let expenses = []
let previousExpenses = JSON.parse(localStorage.getItem("expense"))
let deleteAll = document.getElementById("clear-all")
let d = new Date()
let dateStr = d.toUTCString()
let head = `<table>
<tr>
    <th>Date</th>
    <th>Item</th>
    <th>Description</th>
    <th>Amount in UGX</th>
</tr>`
let foot = "</table>"
let body = ""

if (previousExpenses) {
    expenses = previousExpenses
    display(expenses)
    //this checks if there were any values in localstorage and if true,
    // the values are displayed on the screen
}

class expenditure {
    constructor(date, item, desc, amount) {
            this.date = date,
            this.item = item,
            this.desc = desc,
            this.amount = amount
    }
}

saveExpense.addEventListener("click", function () {
    let exp = new expenditure(dateStr,itemEl.value,descEl.value,amountEl.value)
    expenses.push(exp)
    console.log(expenses)
    localStorage.setItem("expense",JSON.stringify(expenses))
    itemEl.value = ""
    descEl.value = ""
    amountEl.value = ""
    display(expenses)
})

deleteAll.addEventListener("dblclick", function () {
    localStorage.clear()
    expenses = []
    display(expenses)
})

function display(array) {
    let rend = ""
    for (let i = 0; i < array.length; i++) {
        rend  += 
        `<tr>
            <td>${array[i].date}</td>
            <td>${array[i].item}</td>
            <td>${array[i].desc}</td>
            <td>${array[i].amount}</td>
        </tr>`
    }
    body = head + rend 
    displayEl.innerHTML = body + foot
}



































