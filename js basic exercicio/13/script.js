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
const paragrafos = document.querySelectorAll("p")
paragrafos.forEach(paragrafo => {
  console.log(paragrafo)
  console.log(paragrafo.innerText)
});




// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);
