

const acordionList = document.querySelectorAll("[data-acordion-list] dt");

if (acordionList) {
  acordionList[0].classList.add("ativo");
  acordionList[0].nextElementSibling.classList.add("ativo");

  function activeAcordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  acordionList.forEach((item) => {
    item.addEventListener("click", activeAcordion);
  });
}
