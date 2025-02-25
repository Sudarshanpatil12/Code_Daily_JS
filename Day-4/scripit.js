
    let keys = document.querySelectorAll("#keyboard .btn");
let bag = "";

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", myval);
}

function myval(event) {
    let targetNumber = event.target.innerText;

    if (targetNumber == "C") {
        bag = "";
        document.querySelector("#input").innerText = bag;
    } else if (targetNumber == "=") {
        let ans = eval(bag);
        document.querySelector("#input").innerText = ans;
        bag = ans.toString(); // Update bag with the result for further calculations
    } 
     else {
        bag += targetNumber;
        document.querySelector("#input").innerText = bag;
    }
}
