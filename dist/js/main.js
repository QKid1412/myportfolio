const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Show hidden contents
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    // Close menu remove classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

var cycle = 0;
var allImg = [
  "../dist/img/bg1.jpg",
  "../dist/img/bg2.jpg",
  "../dist/img/bg3.jpg",
  "../dist/img/bg4.jpg",
  "../dist/img/bg5.jpg"
];

/*setInterval(function() {
  if (cycle < 5) {
    document.body.style.backgroundImage =
      "url('" + allImg[cycle] + "')";
    cycle += 1;
  } else {
    cycle = 0;
  }
}, 5000);*/
