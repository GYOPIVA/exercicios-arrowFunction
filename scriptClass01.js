//Exercicio 7

class Animal{
    constructor(nome,data,raca,tipoAnimal){
        this.nomeAnimal= nome
        this.dataNascimentoAnimal = data
        this.racaAnimal= raca
        this.tipoAnimal = tipoAnimal
    }
    exibirDadosAnimal(){
        console.log("Nome do " + this.tipoAnimal + ": "+ this.nomeAnimal + "\nData nascimento: " + this.dataNascimentoAnimal + "\nRaça do animal: " + this.racaAnimal)
    }
}

const animais = [
    gato = new Animal("Seu João","22/06/2006","Persa","Gato"),
    cachorro = new Animal("Bob","05/08/2018","Zovudo","Cachorro"),
    passaro = new Animal("Fininho","12/02/2022","Papagaio","Passaro")
]

  animais.forEach(todosAnimais =>{
    todosAnimais.exibirDadosAnimal()
}) 


