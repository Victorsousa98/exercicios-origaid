// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
  };
}

const cliente = new Pessoa("João", "Victor", 24);
console.log(cliente.nomeCompleto());

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.__proto__));
console.log(Object.getOwnPropertyNames(HTMLAllCollection.__proto__));
console.log(Object.getOwnPropertyNames(HTMLDocument.__proto__));

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //Object
console.log(li.click.constructor.name); //Function
console.log(li.innerText.constructor.name); //String
console.log(li.value.constructor.name); //Number
console.log(li.hidden.constructor.name); //Boolean
console.log(li.offsetLeft.constructor.name); //Number
console.log(li.click.constructor.name); //Function

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //boolean
