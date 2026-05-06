let resposta = 0
let soma = 0
let repeticao = 0
let par = 0
let impar = 0
let media = 0
let num = 0


do {
    num = parseInt(prompt("digite um numero:"))
    soma += num
    if(num%2 == 0){
        par ++
    }
    else{
        impar ++
    }
    repeticao++
    resposta = parseInt(prompt("deseja continuar? (1 para SIM e 0 para NÃO)"))
    

} while (resposta == 1);
media = soma/repeticao
alert("voce digitou"+repeticao+"numeros")
alert("a soma é"+soma)
alert("pares: "+par)
alert("impares:"+impar)
alert("a media é:"+media)