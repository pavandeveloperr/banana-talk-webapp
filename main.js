// var UserName = prompt("What is your name?");
// alert(`Hi,${UserName}. Welcome to Banana Talk!`);

// var btnTranslate = document.querySelector("#btn-translate");

// function clickHandler(){
//     console.log("CLICKED!");
// }

// btnTranslate.addEventListener("click", clickHandler);

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);