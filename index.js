function calcularArea(numAlt,numLar) {
    const altura = numAlt;
    const largura = numLar;
    const area = altura * largura;
    return area;
}
console.log(calcularArea(10,2));
console.log(calcularArea(12,90));


//ex 1

function imprimeConsole() {
    console.log("Olá mundo");
}
imprimeConsole()

//ex 2

function imprimeNome(nome) {
    console.log(`Olá ${nome}`);
}
imprimeNome("Maria")
imprimeNome("Antonieta")
imprimeNome("Felipe")

function colocarnomeMaiusculo(nome){
    const nomeMaiusculo = nome.toUpperCase()
    return nomeMaiusculo
}

console.log(colocarnomeMaiusculo("Maria Antonieta"));

function somar(nmr1,nmr2) {
    const soma = nmr1 + nmr2
    return soma
}
const retornoSoma = somar(10,20)
console.log(retornoSoma);







function filtrarArray(arrayNumeros){
const primeiroElemento = arrayNumeros[0] / 2
const ultimoElemento = arrayNumeros[arrayNumeros.length - 1]
return [primeiroElemento,ultimoElemento]
}
const numeros = [10,54,23,70]
console.log(filtrarArray(numeros))

const somar =  (nmr1,nmr2) =>{
        const soma = nmr1 + nmr2
        return soma
}

function somar(numero1,numero2){
    const soma = numero1 + numero2
    return soma
} 


// ex 1 - interpretação de código

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50


//ex 2 - interpretação de código
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a - transforma o texto em letras minúsculas e verifica se há "cenoura"
//b1- true
//b2- true
//b3- true


//ex 1 - escrita de código
a-
function infos() {
const nome = prompt("Digite seu nome")
const idade = Number (prompt("Digite sua idade"))
const cidade = prompt("Digite sua cidade")
const ocupacao = prompt("Digite sua ocupação")
console.log("Eu sou" ,nome, "tenho" ,idade, "anos, moro em" ,cidade, "e sou" ,ocupacao);
}
console.log(infos());

b-
const nome = prompt("Digite seu nome")
const idade = Number (prompt("Digite sua idade"))
const cidade = prompt("Digite sua cidade")
const profissao = prompt("Digite sua profissão")

function listarPessoa(nomePessoa,idadePessoa,cidadePessoa,profissaoPessoa){
console.log(`Eu sou ${nomePessoa}, tenho ${idadePessoa} anos, moro  em ${cidadePessoa} e sou ${profissaoPessoa}.`);
}
listarPesoa(nome,idadae,cidade,profissao)

//ex 2 - escrita de código
function somar(n1,n2){
return n1 + n2
}
 function maiorQue(n1,n2){
 return n1 >= n2
 }
console.log(somar(10, 20));
console.log(maiorQue(10, 20));
console.log(ifPar(10, 20));	
	


//ex 3 - escrita de código

function somar(n1, n2) {
return n1+ n2;
}


function subtrair(n1, n2) {
return n1 - n2;
}

function multiplicar(n1, n2) {
return n1 * n2;
}

function dividir(n1, n2) {
return n1 / n2;
}

console.log(somar(n1,n2))
console.log(subtrair(n1,n2))
console.log(multiplicar(n1,n2))
console.log(dividir(n1,n2))


//notas - para importar:
import { outraFuncao } from "arquivo.js";

let textodoUsuario = prompt("Insira um texto");

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
