/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Erro extends Error {
  constructor(message){
    super(message);
    this.name = "Erro";
  }
}

class Animal {
  constructor(nome, idade, especie) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos() {
    try {
      return this.atributos();
    } catch (error) {
      return error
    }
  } 

  atributos() {
  if (this.nome != "" && this.idade != "" && this.especie != ""){
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    };
   } else {
    throw new Erro("Há atributo vazio.");
   }
  }
}

const meuAnimal = new Animal("", 3, "cachorro");

// Imprimindo os atributos
console.log(meuAnimal.mostrarAtributos());