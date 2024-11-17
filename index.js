//document.getElementById("count-el").innerText=5;
//console.log(count)

//let count = 0

//listen for clicks on button
//increment count var when button is clicked
//change count-el in html


let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0;
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment(){
    
count+= 1
countEl.innerText=count
console.log(count)
}

function save(){
let countStr = count + " - "
saveEl.textContent += countStr
countEl.textContent=0
count = 0
}






