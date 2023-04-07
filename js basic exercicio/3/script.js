const botao = document.querySelector(".botao");
const reset = document.querySelector(".reset");
const div = document.querySelector("div");
let num = parseInt(div.innerHTML);

function somar() {
  if (botao && num < 10) {
    num++;
    div.innerHTML = num;
  } else {
    div.innerHTML = "Número maior que 10";
  }
}

function resetar() {
  div.innerHTML = 0;
}

botao.addEventListener("click", somar);
reset.addEventListener("click", resetar);
