//Exercicio 1
dobro=(n)=>{
    return n * 2
}
console.log("O dobro do parametro digitado é: " + dobro(10))
//Exercicio 2
saudacao = () => "Olá Mundo"
console.log(saudacao())
//Exercicio 3
soma = (a,b) =>  a + b
console.log("A somas dos numeros nos parentes é " + soma(10,5))
//Exercicio 4
verificar = (n) => n % 2 == 0? "É par" : "É impar"
console.log(verificar(3))
//Exercicio 5
areaQuadrado = (a)=> a * a 
console.log("A area do quadrado é " + areaQuadrado(5))
//Exercicio 6
idade = (n) => n >= 18? "Maior Idade" : "Menor idade"  
console.log(idade(17))
//Exercicio 7
converter = (dolar)=> dolar * 5
console.log("O valor convertido para reais é: R$" + converter(10))
//Exercicio 8 
pessoa = (nome,idade)=> "Olá meu nome é " + nome + " e tenho " + idade + " de idade" 
console.log(pessoa("Giovany",24))
//Exercicio 9
multiplicar = (valor)=> valor * 10
console.log("O valor multiplicado é " + multiplicar(10))
//Exercicio 10
contarCaracteres = (palavra) => "A quantidade de caractéres é " + palavra.length;
console.log(contarCaracteres("Sim"));
