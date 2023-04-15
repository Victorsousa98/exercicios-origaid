// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 24;
let idadeParente = 24;

if (minhaIdade < idadeParente) {
  console.log("É maior");
} else if (minhaIdade === idadeParente) {
  console.log("é igual");
} else {
  console.log("é menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
//retorna 3 porque toda a expressão é verdadeira, então o resultado da ultima sub-expressão é retornada, 5 - 2 = 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
