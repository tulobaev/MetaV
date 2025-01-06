let menu = document.querySelector(".burger");
let modal = document.querySelector(".modal_menu");
let exit_menu = document.querySelector(".exit_menu");

menu.addEventListener("click", () => {
  modal.style.display = "flex";
});
exit_menu.addEventListener("click", () => {
  modal.style.display = "none";
});
