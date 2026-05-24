let condicao = 0
let soma = 0
let vetor = []


do {
    num = parseInt(prompt("digite um numero"))
    vetor.push(num)
    condicao = parseInt(prompt("deseja continuar? 1 para sim; 0 para não"))
    soma = soma + num
} while (condicao == 1);

let maior = vetor[0]
let menor = vetor[0]

for (let i =0; i < vetor.length; i++) {
    if (vetor[i] > maior){
        maior = vetor[i]
    }
    else if(vetor[i]<menor){
        menor = vetor[i]
    }
}

console.log(vetor)
console.log("A média é " + (soma/vetor.length))
console.log("o maior é "+maior)
console.log("o menor é "+menor)
