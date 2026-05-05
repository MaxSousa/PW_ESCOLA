let opcao = 0
let sair = 0

do {
    opcao = parseInt(prompt("escolha um prato: \n 1.sopa \n 2.sanduiche \n 3.bolo de morango"))
    switch (opcao) {
        case 1:
            sair=parseInt(prompt("você escolheu a sopa, deseja continuar (s.1/n.2)"))
            break;
        case 2:
            sair=parseInt(prompt("você escolheu sanduiche, deseja continuar? (s.1/n.2)"))
            break
        case 3:
            sair=parseInt(prompt("você escolheu bolo de morango, deseja continuar? (s.1/n.2"))
            break
        default:
            alert("erro")
            break;
    }

} while (sair == 1);