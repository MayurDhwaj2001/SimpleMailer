// document.addEventListener("DOMContentLoaded", () => {
//   const popup = document.getElementById("popup");
//   const showPopupButton = document.getElementById("Send");
//   showPopupButton.addEventListener("click", () => {
//     popup.style.display = "flex"; // Change the display property to "flex" when the button is clicked
//   });
// });
let button = document.querySelector(".button");
let buttonText = document.querySelector(".tick");

const tickMark =
  '<svg width="30" height="30" viewBox="0 0 58 45" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="nonzero" d="M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65"/></svg>';

buttonText.innerHTML = "Submit";

button.addEventListener("click", function () {
  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle("button__circle");
});
