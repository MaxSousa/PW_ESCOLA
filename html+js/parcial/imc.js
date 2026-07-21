function imc(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso/(altura * altura)

    document.getElementById("resultado").innerHTML = `resultado: ${imc.toFixed(2)}`

    if (imc <= 18.5){
        document.getElementById("classificacao").innerHTML = `classificação: abaixo do peso`
    }
    else if (imc > 18.5 && imc < 24.9){
        document.getElementById("classificacao").innerHTML = `classificação: Peso normal`
    }
    else if (imc > 25.0 && imc < 29.9){
        document.getElementById("classificacao").innerHTML = `classificação: Excesso de Peso`
    }
    else if (imc > 30 && imc < 34.9){
        document.getElementById("classificacao").innerHTML = `classificação: Obesidade classe 1`
    }
    else if (imc > 35 && imc < 39.9){
        document.getElementById("classificacao").innerHTML = `classificação: Obesidade classe 2`
    }
    else{
        document.getElementById("classificacao").innerHTML = `classificação: Obesidade classe 3`
    }

}