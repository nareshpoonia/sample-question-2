var textInput = document.querySelector("#text-input");
var btnMinus = document.querySelector("#btn-minus");
var btnPlus = document.querySelector("#btn-plus");

var fontSize = 10;
btnMinus.addEventListener("click", minusClickHandler);

function minusClickHandler() {
  fontSize = fontSize - 2;
  console.log("clicked");
  textInput.style.fontSize = fontSize + "px";
}

btnPlus.addEventListener("click", plusClickHandler);

function plusClickHandler() {
  fontSize = fontSize + 2;
  textInput.style.fontSize = fontSize + "px";
}
