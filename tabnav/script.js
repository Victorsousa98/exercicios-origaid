const tabMenu = document.querySelectorAll("[data-ferramentas-lista] li");
const tabDescricao = document.querySelectorAll(
  "[data-ferramentas-descricao] li"
);

if (tabMenu.length && tabDescricao.length) {
  tabDescricao[0].classList.add("ativo");

  function activeTab(index) {
    tabDescricao.forEach((descricao) => {
      descricao.classList.remove("ativo");
    });
    tabDescricao[index].classList.add("ativo");
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
