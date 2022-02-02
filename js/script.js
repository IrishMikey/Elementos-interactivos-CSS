// Enable/Disable dark mode with slider state

var slider = document.getElementById("slider");
var sliderContainer = document.getElementById("sliderContainer");

var main = document.getElementsByTagName("main")[0];
var body = document.getElementsByTagName("body")[0];


var sliderState = "light";
function setDarkMode() {
    sliderState = "dark";
    slider.setAttribute("class", 'darkModeOn');
    body.setAttribute("class", "bodyDark");
}
function setLightMode() {
    sliderState = "light";
    slider.setAttribute("class", 'lightModeOn');
    body.removeAttribute("class", "bodyDark");
}

sliderContainer.addEventListener("click", () => {
    if (body.classList.contains('bodyDark')) {
        setLightMode();
    } else
        setDarkMode();

});


// Enable/Disable button with checkbox state

var chekBox = document.getElementById("confirmarCheck");
var enterBtn = document.getElementById("enterBtn");
chekBox.addEventListener("change", (e) => {
    if (e.target.checked) {
        enterBtn.disabled = false;
    } else {
        enterBtn.disabled = true;
    }
    console.log(enterBtn);
});
var aside = document.getElementsByTagName("aside")[0];

var dMenu = document.getElementById("dMenu");
dMenu.addEventListener("click", () => {
    if (aside.classList.contains('closeMenu')) {
        aside.setAttribute("class", 'openMenu');
    } else
        aside.setAttribute("class", 'closeMenu');

});

