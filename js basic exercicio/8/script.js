// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dados = {
  nome: "João Victor",
  sobrenome: "Sousa Chagas",
  idade: 24,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return console.log(this.nome + " " + this.sobrenome);
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raça: labrador,
  cor: preto,
  idade: 10,
  late: function(homem){
    if(homem){
      console.log("latiu")
    }
  }
}