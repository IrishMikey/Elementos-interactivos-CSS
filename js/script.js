// Enable/Disable dark mode with slider state

var slider = document.getElementById("slider");
var sliderContainer = document.getElementById("sliderContainer");

var main = document.getElementsByTagName("main")[0];
var body = document.getElementsByTagName("body")[0];

var sliderState = "light";
function setDarkMode() {
  sliderState = "dark";
  slider.setAttribute("class", "darkModeOn");
  body.setAttribute("class", "bodyDark");
}
function setLightMode() {
  sliderState = "light";
  slider.setAttribute("class", "lightModeOn");
  body.removeAttribute("class", "bodyDark");
}

sliderContainer.addEventListener("click", () => {
  if (body.classList.contains("bodyDark")) {
    setLightMode();
  } else setDarkMode();
});
// Open/Close side nav
var aside = document.getElementsByTagName("aside")[0];

var dMenu = document.getElementById("dMenu");
dMenu.addEventListener("click", () => {
  if (aside.classList.contains("openMenu")) {
    aside.setAttribute("class", "closeMenu");
  } else aside.setAttribute("class", "openMenu");
});

var enterBtn = document.getElementById("enterBtn");

// Enable/Disable button with checkbox state

var chekBox = document.getElementById("confirmarCheck");
chekBox.addEventListener("change", (e) => {
  if (e.target.checked) {
    enterBtn.disabled = false;
  } else {
    enterBtn.disabled = true;
  }
});

//Activate spinner
var spinnerTime;
var spinnerContainer = document.getElementsByClassName("spinnerContainer")[0];
var startContainer = document.getElementsByClassName("startContainer")[0];
enterBtn.addEventListener("click", () => {
  startContainer.style.display = "none";
  spinnerContainer.style.display = "flex";
  spinnerTime = setTimeout(showMovies, 2000);
});
var movieContainer = document.getElementsByClassName("movieContainer")[0];

function showMovies() {
  clearInterval(spinnerTime);
  spinnerContainer.style.display = "none";
  movieContainer.style.display = "flex";
}

var movieTitleBar = Array.from(document.getElementsByClassName("bar"));
movieTitleBar.forEach((bar) => {
  bar.addEventListener("click", () => {
    if (bar.nextElementSibling.style.display == "flex") {
      bar.nextElementSibling.style.display = "none";
    } else {
      bar.nextElementSibling.style.display = "flex";
      console.log(bar.nextElementSibling.style.display);
    }

  });
});
console.log(movieTitleBar);
