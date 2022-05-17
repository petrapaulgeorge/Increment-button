let countNumber = document.getElementById("count-Number")
let count = 0

function increment() {
    count = count + 1
    countNumber.innerText = count
}

function save() {
    console.log(count)
}