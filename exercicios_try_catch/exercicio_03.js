class Erro extends Error {
  constructor(message){
    super(message);
    this.name = "Erro";
  }
}

class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    try{
     return this.atributos();
    } catch (error) {
      return error
    }
  }

  atributos() {
    if (this.estudante != "" && this.cosplay != "" && this.nota_cosplay != ""){
      return {
        estudante: this.estudante,
        cosplay: this.cosplay,
        nota_cosplay: this.nota_cosplay
      };
     } else {
      throw new Erro("Há atributo vazio")
     }
    }
  }


const aluno = new NerdIF("", "Homem-Aranha", 9.5);

console.log(aluno.retornarAtributos());