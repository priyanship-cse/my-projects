

let input = document.querySelector(".input");
let button = document.querySelector(".button");
let result = document.querySelector(".result");

button.addEventListener("click", function () {
    let value = input.value;

    if (input.value === "") {
        result.innerText = " Please Enter a Value";
    } else if ( value % 2 == 0) {
        result.innerText = " Even Number " ;
    } else {
        result.innerText = " Odd Number ";
    }
});