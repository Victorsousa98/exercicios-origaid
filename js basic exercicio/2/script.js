const circulo = document.querySelector("div");

function moveCirculo(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", moveCirculo);
