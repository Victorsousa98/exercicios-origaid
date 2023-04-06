function Livro(nome, ano, autor) {
  let nomeUp = nome.toUpperCase();
  let total = 2022 - ano;
  let frase = nome + " por " + autor;

  livro = {
    nome: nomeUp,
    total: total,
    frase: frase,
  };

  return livro;
}

const execute = Livro("O senhor dos aneis", 1945, "J. R. R. Tolkien");

console.log(execute)