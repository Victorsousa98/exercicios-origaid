// // // // Retorne no console todas as imagens do site
// // // const imagens = document.querySelectorAll("img");
// // // console.log(imagens);

// // // // Retorne no console apenas as imagens que começaram com a palavra imagem

// // // const imagem = document.querySelectorAll('[src^="img/imagem"]');
// // // console.log(imagem);

// // // // Selecione todos os links internos (onde o href começa com #)
// // // const links = document.querySelectorAll('[href^="#"]');
// // // console.log(links);

// // // // Selecione o primeiro h2 dentro de .animais-descricao
// // // const h2 = document.querySelector(".animais-descricao h2");
// // // console.log(h2);
// // // // Selecione o último p do site
// // // const ultimoP = document.querySelectorAll("p")
// // // console.log(ultimoP[ultimoP.length - 1])

// // // Mostre no console cada parágrado do site
// // // Mostre o texto dos parágrafos no console
// // // const paragrafos = document.querySelectorAll("p")
// // // paragrafos.forEach(paragrafo => {
// // //   console.log(paragrafo)
// // //   console.log(paragrafo.innerText)
// // // });

// // // // Como corrigir os erros abaixo:
// // // const imgs = document.querySelectorAll('img');

// // // imgs.forEach((item, index) => {
// // //   console.log(item, index);
// // // });

// // // let i = 0;
// // // imgs.forEach( () => {
// // //   console.log(i++);
// // // });

// // // imgs.forEach(() => i++);

// // // Adicione a classe ativo a todos os itens do menu
// // const linksMenu = document.querySelectorAll(".menu a");
// // linksMenu.forEach((link) => {
// //   link.classList = "ativo";
// //   console.log(link);
// // });
// // // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// // linksMenu.forEach((link) => {
// //   link.classList.remove("ativo");
// // });
// // linksMenu[0].classList.add("ativo");

// // // Verifique se as imagens possuem o atributo alt
// // const imagens = document.querySelectorAll("img");
// // imagens.forEach((imagem) => {
// //   console.log(imagem.hasAttribute("alt"));
// // });

// // // Modifique o href do link externo no menu
// // linksMenu[linksMenu.length - 1].setAttribute("href", "#");
// // console.log(linksMenu[linksMenu.length - 1]);

// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// // const primeiraImg = document.querySelector("img");
// // console.log(primeiraImg.offsetTop);

// // // Retorne a soma da largura de todas as imagens
// // const imagens = document.querySelectorAll("img");
// // let somaDasLarguras = 0;
// // imagens.forEach((imagem) => {
// //   somaDasLarguras += imagem.width;
// // });

// // console.log(somaDasLarguras);

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll("a");
// links.forEach((link) => {
//   console.log(link.clientWidth, link.clientHeight);
//   if (link.clientWidth >= 48 && link.clientHeight >= 48) {
//     console.log("bom");
//   } else console.log("ruim");
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
// const small = window.matchMedia("(max-width: 600px)");
// if (small.matches) {
//   console.log('tela menor que 600px')
// }else console.log('tela maior que 600px')

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    linksInternos.forEach((link) => {
      link.classList.remove("ativo");
    });
    link.classList.toggle("ativo");
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// const todosElementos = document.querySelectorAll("body *");

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", (event) => {
//     console.log(event.currentTarget);
//   });
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll("body *");

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    elemento.remove();
  });
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

let t = 32;
window.addEventListener("keydown", (event) => {
  if (event.key === "t") {
    t++;
  }
  document.body.style.fontSize = `${t}px`;
});
