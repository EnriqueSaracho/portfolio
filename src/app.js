const hamburgerButton = document.getElementById("hamburger");
const navBar = document.getElementById("nav-bar");
const body = document.getElementById("body");
let flag = 0;

function toggleButton() {
  if(flag == 0) {
    navBar.style.left = "-300px";
    body.style.margin = "0";
    flag = 1;
  } else {
    navBar.style.left = "0";
    body.style.margin = "0 0 0 300px";
    flag = 0;
  }
}

hamburgerButton.addEventListener("click", toggleButton);
