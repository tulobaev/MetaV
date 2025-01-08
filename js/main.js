// document.addEventListener("mousemove", function (e) {
//   const cursor = document.querySelector(".cursor-follow");
//   cursor.style.left = `${e.pageX}px`;
//   cursor.style.top = `${e.pageY}px`;
//   // Изменение цвета курсора в зависимости от положения
//   const red = Math.min(255, e.pageX % 255);
//   const green = Math.min(255, e.pageY % 255);
// });

let menu = document.querySelector(".burger");
let modal = document.querySelector(".modal_menu");
let exit_menu = document.querySelector(".exit_menu");

menu.addEventListener("click", () => {
  modal.style.display = "flex";
});
exit_menu.addEventListener("click", () => {
  modal.style.display = "none";
});
