let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0 ;
   // console.log(count); Debugging
}

let name = " Parker Abdul-samad ";
let greeting = "Welcome Back";
let welcomeEl = document.getElementById("welcome-el");
welcomeEl.innerText = greeting + name;
welcomeEl.innerText += " 👋";
 

 