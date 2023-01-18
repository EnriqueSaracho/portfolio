const body = document.getElementById("body");
const primaryHamburgerButton = document.getElementById("primary-hamburger");
const primaryNavBar = document.getElementById("primary-nav-bar");
let primaryFlag = 0;
const secondaryNavBar = document.getElementById("secondary-nav-bar");
const secondaryHamburgerButton = document.getElementById("secondary-hamburger");
let secondaryFlag = 0;
const secondaryNavLogoBtn = document.getElementById("secondary-nav-logo");
const secondarySkillsBtn = document.getElementById("secondary-skills");
const secondaryProjectsBtn = document.getElementById("secondary-projects");
const secondaryContactMeBtn = document.getElementById("secondary-contact-me");

function togglePrimaryButton() {
  if (primaryFlag == 0) {
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
  if (secondaryFlag == 0) {
    secondaryNavBar.style.top = "0";
    body.style.marginTop = "0";
    secondaryFlag = 1;
  } else {
    secondaryNavBar.style.top = "-93vh";
    body.style.marginTop = "7vh";
    secondaryFlag = 0;
  }
}

function toggleNavBarOption() {
  secondaryNavBar.style.top = "-93vh";
  body.style.marginTop = "7vh";
  secondaryFlag = 0;
}

primaryHamburgerButton.addEventListener("click", togglePrimaryButton);
secondaryHamburgerButton.addEventListener("click", toggleSecondaryButton);
secondaryNavLogoBtn.addEventListener("click", toggleNavBarOption);
secondarySkillsBtn.addEventListener('click', toggleNavBarOption)
secondaryProjectsBtn.addEventListener("click", toggleNavBarOption);
secondaryContactMeBtn.addEventListener("click", toggleNavBarOption);
