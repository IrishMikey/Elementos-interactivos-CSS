var slider = document.getElementById("slider");
var sliderContainer = document.getElementById("sliderContainer");
var main = document.getElementsByTagName("main")[0];
var body = document.getElementsByTagName("body")[0];
var sliderState = "light";

function setDarkMode() {
    sliderState = "dark";
    slider.style.left = "25px";
    main.style.backgroundImage = "url('../img/bg-dark.png')";
    body.style.color = "white";
}
function setLightMode() {
    sliderState = "light";
    slider.style.left = "";
    main.style.backgroundImage = "url('../img/bg-light.png')";
    body.style.color = "black";
}

sliderContainer.addEventListener("click", () => {
    if (sliderState == "light") {
        setDarkMode();
    } else if (sliderState == "dark") {
        setLightMode()
    }

})