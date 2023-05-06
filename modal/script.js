const abrirLogin = document.querySelector(".abrir");
const fecharLogin = document.querySelector(".fechar");
const container = document.querySelector(".modal-container");

if (abrirLogin && fecharLogin && container) {
  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  abrirLogin.addEventListener("click", toggleModal);
  fecharLogin.addEventListener("click", toggleModal);
  container.addEventListener("click", clickForaModal);
}
