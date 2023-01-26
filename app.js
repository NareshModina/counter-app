let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0
function countIncrement(){
    count = count + 1
    countEl.innerText = count
    console.log(countEl)
}

let saveEl = document.getElementById("save-el")
function save(){
    saveEl.textContent += count + " - "
    countEl.innerText = 0
    count = 0
}
