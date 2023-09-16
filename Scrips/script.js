function E(selector, parent) {
  if (selector instanceof HTMLElement) return selector;

  return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
  return element.classList.contains(className);
}
function radioClass(element, className) {
  E("." + className).forEach((elem) => elem.classList.remove(className));
  element.classList.toggle(className);
}

function tabs(nav) {
  let navElem = E(nav)[0];

  navElem.addEventListener("click", (e) => {
    let target = e.target;
    if (hasClass(target, "tab")) radioClass(target, "active");

    let linkedTab = E("." + target.id)[0];

    radioClass(linkedTab, "visible");
  });

  let active = E(".tab.active")[0];
  if (active) {
    radioClass(E("." + active.id)[0], "visible");
  }
}

tabs(".menu-nav");
tabs(".menu-nav-2");

let loadMoreBtn1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
  for (var i = currentItem1; i < currentItem1 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem1 += 4;
  if (currentItem1 >= boxes.length) {
    loadMoreBtn1.style.display = "none";
  }
};

let loadMoreBtn2 = document.querySelector("#load-more-2");
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-2 .box-2")];
  for (var i = currentItem2; i < currentItem2 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem2 += 4;
  if (currentItem2 >= boxes.length) {
    loadMoreBtn2.style.display = "none";
  }
};
/*
let loadMoreBtn3 = document.querySelector("#load-more-3");
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-3 .box-3")];
  for (var i = currentItem3; i < currentItem3 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem3 += 4;
  if (currentItem3 >= boxes.length) {
    loadMoreBtn3.style.display = "none";
  }
};
*/
let loadMoreBtn4 = document.querySelector("#load-more-4");
let currentItem4 = 4;

loadMoreBtn4.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-4 .box-4")];
  for (var i = currentItem4; i < currentItem4 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem4 += 4;
  if (currentItem4 >= boxes.length) {
    loadMoreBtn4.style.display = "none";
  }
};

let loadMoreBtn5 = document.querySelector("#load-more-5");
let currentItem5 = 4;

loadMoreBtn5.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-5 .box-5")];
  for (var i = currentItem5; i < currentItem5 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem5 += 4;
  if (currentItem5 >= boxes.length) {
    loadMoreBtn5.style.display = "none";
  }
};

$(".btn-1").click(onBtn1);

function onBtn1() {
  const carritoElement = document.querySelector(".carrito p");
  const message = carritoElement.textContent;
  // Create a WhatsApp link with the phone number and message
  const whatsappLink = "https://wa.me/+5358505864?text=" + encodeURIComponent(message);
  // Redirect the user to the WhatsApp link
  window.location.href = whatsappLink;
  //alert(message);
}






$(".btn-2").click(onBtn2);

function onBtn2() {
  $(".informacion").slideToggle(1000);
}

$("#contacto").click(onMenu);

function onMenu() {
  $("#logo-menu").slideToggle(1000);
}

$("#carrito").click(onCarrito);
$("#carrito-2").click(onCarrito);

function onCarrito() {
  $("#caja-carrito").slideToggle(1000);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("buy")) {
    const h3Element = e.target.closest(".content").querySelector("h3");
    const h3Text = h3Element.innerText;
    const carritoElement = document.querySelector(".carrito p");
    carritoElement.innerHTML += h3Text + "<br>";
  }
});

$("#borrar").click(onBorrar);

function onBorrar() {
  const carritoElement = document.querySelector(".carrito p");
  let contenidoHTML = carritoElement.innerHTML;
  const lastBR = contenidoHTML.lastIndexOf("<br>");
  contenidoHTML = contenidoHTML.substring(0, lastBR);
  carritoElement.innerHTML = contenidoHTML;
}