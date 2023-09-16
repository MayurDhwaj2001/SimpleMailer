document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const showPopupButton = document.getElementById("Send");
  showPopupButton.addEventListener("click", () => {
    popup.style.display = "flex"; // Change the display property to "flex" when the button is clicked
  });
});
