// Variables
var button = document.getElementById("menuknop");
var element = document.querySelector("article");
var kruisje = document.getElementById("kruisje");

// Functie om hamburger menu zichtbaar te maken of te laten verdwijnen
button.addEventListener("click", function() {
    element.classList.toggle("zichtbaar");
})

kruisje.addEventListener("click", function() {
    element.classList.toggle("zichtbaar");
})