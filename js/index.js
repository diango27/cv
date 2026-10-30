let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let blockMenu = document.getElementById("block-menu");

function open() {
  blockMenu.classList.toggle("new-class");
}

btnOpen.addEventListener("click", open);

function close() {
  blockMenu.classList.remove("new-class");
}

btnClose.addEventListener("click", close);
