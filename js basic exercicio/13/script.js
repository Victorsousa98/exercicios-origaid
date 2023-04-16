// // Retorne no console todas as imagens do site
// const imagens = document.querySelectorAll("img");
// console.log(imagens);

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const imagem = document.querySelectorAll('[src^="img/imagem"]');
// console.log(imagem);

// // Selecione todos os links internos (onde o href começa com #)
// const links = document.querySelectorAll('[href^="#"]');
// console.log(links);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const h2 = document.querySelector(".animais-descricao h2");
// console.log(h2);
// // Selecione o último p do site
// const ultimoP = document.querySelectorAll("p")
// console.log(ultimoP[ultimoP.length - 1])

// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
// const paragrafos = document.querySelectorAll("p")
// paragrafos.forEach(paragrafo => {
//   console.log(paragrafo)
//   console.log(paragrafo.innerText)
// });

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( () => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// Adicione a classe ativo a todos os itens do menu
const linksMenu = document.querySelectorAll(".menu a");
linksMenu.forEach((link) => {
  link.classList = "ativo";
  console.log(link);
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
linksMenu.forEach((link) => {
  link.classList.remove("ativo");
});
linksMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
imagens.forEach((imagem) => {
  console.log(imagem.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
linksMenu[linksMenu.length - 1].setAttribute("href", "#");
console.log(linksMenu[linksMenu.length - 1]);
