const primaryHamburgerButton = document.getElementById("primary-hamburger");
const primaryNavBar = document.getElementById("primary-nav-bar");
const body = document.getElementById("body");
let flag = 0;

function toggleButton() {
  if(flag == 0) {
    primaryNavBar.style.left = "-300px";
    body.style.margin = "0";
    flag = 1;
  } else {
    primaryNavBar.style.left = "0";
    body.style.margin = "0 0 0 300px";
    flag = 0;
  }
}

primaryHamburgerButton.addEventListener("click", toggleButton);
