let cont = 0;
while (cont <= 100){
    if (cont % 2 == 0){
        console.log(cont)
    }
    cont++
}


let opcao = ""

do {
    opcao = prompt("1. opcao 1 \n2.sair")
    switch (opcao) {
        case 1:
            alert("opcao 1")
            break;
        case 2:
            alert("saindo...")
    
        default:
            alert("erro!")
            break;
    }
} while(opcao !== "2")