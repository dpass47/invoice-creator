const washBtn = document.getElementById("wash-btn")
const weedBtn = document.getElementById("weed-btn")
const lawnBtn = document.getElementById("lawn-btn")
const sendBtn = document.getElementById("send-btn")
const tasksDiv = document.getElementById("tasks")
const totalAmount = document.getElementById("total-amount")

let tasks = []
let total = []

renderTasks()

function addTotal(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += total[i]
        totalAmount.innerHTML = `<span id="float-right">$${sum}</span>`
    }
}

// can't figure out stretch goal of remove buttons. Can't think how to link the button to a certain index within the array

function renderTasks() {
    tasksDiv.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        tasksDiv.innerHTML += `<p id="tasks">${tasks[i]}<span id="float-right">$${total[i]}</span></p>`
    }
    addTotal(total)
    // currently the sum is displayed first with mo
}

washBtn.addEventListener("click", function () {
    if (tasks.indexOf("Wash Car") !== -1) {
        alert("Oops! This service is already added.")
    } else {
        tasks.push("Wash Car")
        total.push(10)
        renderTasks()
    }
})

lawnBtn.addEventListener("click", function () {
    if (tasks.indexOf("Mow Lawn") !== -1) {
        alert("Oops! This service is already added.")
    } else {
        tasks.push("Mow Lawn")
        total.push(20)
        renderTasks()
    }
})

weedBtn.addEventListener("click", function () {
    if (tasks.indexOf("Pull Weeds") !== -1) {
        alert("Oops! This service is already added.")
    } else {
        tasks.push("Pull Weeds")
        total.push(30)
        renderTasks()
    }
})

sendBtn.addEventListener("click", function () {
    tasksDiv.innerHTML = ""
    totalAmount.innerHTML = ""
    tasks = []
    total = []
})