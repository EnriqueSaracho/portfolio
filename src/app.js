const primaryHamburgerButton = document.getElementById("primary-hamburger");
const primaryNavBar = document.getElementById("primary-nav-bar");
const secondaryHamburgerButton = document.getElementById("secondary-hamburger")
const secondaryNavBar = document.getElementById("secondary-nav-bar")
const body = document.getElementById("body");
let primaryFlag = 0;
let secondaryFlag = 0;

function togglePrimaryButton() {
  if(primaryFlag == 0) {
    primaryNavBar.style.left = "-300px";
    body.style.margin = "0";
    primaryFlag = 1;
  } else {
    primaryNavBar.style.left = "0";
    body.style.margin = "0 0 0 300px";
    primaryFlag = 0;
  }
}

function toggleSecondaryButton() {
  if(secondaryFlag == 0) {
    secondaryNavBar.style.top = "-95vh";
    body.style.marginTop = "5vh";
    secondaryFlag = 1;
  } else {
    secondaryNavBar.style.top = "0";
    body.style.marginTop = "0";
    secondaryFlag = 0;
  }
}

primaryHamburgerButton.addEventListener("click", togglePrimaryButton);
secondaryHamburgerButton.addEventListener("click", toggleSecondaryButton);
