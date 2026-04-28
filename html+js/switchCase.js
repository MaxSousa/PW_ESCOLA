
let n1 = parseFloat(prompt("digite um numero"))
let n2 = parseFloat(prompt("digite outro numero"))
let option = parseInt(prompt("escolha uma operação (1.+ 2.- 3.* 4./)"))


switch (option) {
    case 1:
        alert("o resultado é "+ (n1 + n2))
        break
    case 2:
        alert("o resultado é "+ (n1 - n2))
        break
    case 3:
        alert("o resultado é "+ (n1 * n2))
        break
    case 4:
        alert("o resultado é "+ (n1/n2))
        break
    default:
        alert("erro")
        break
}