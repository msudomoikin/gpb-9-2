const subMenuButton = document.querySelector(".main-nav__sub-button");
const subMenu = document.querySelector(".main-nav__sublist");

subMenuButton.addEventListener("click", function () {
  subMenu.classList.toggle("main-nav__sublist--open");
  document.addEventListener("click", handleOutsideClick);
});

function handleOutsideClick(event) {
  const isClickInside =
    subMenu.contains(event.target) || subMenuButton.contains(event.target);
  if (!isClickInside) {
    subMenu.classList.remove("main-nav__sublist--open");
    document.removeEventListener("click", handleOutsideClick);
  }
}
