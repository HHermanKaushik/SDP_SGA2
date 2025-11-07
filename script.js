// ===========================
// MOBILE MENU
// ===========================
const mobileBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});
