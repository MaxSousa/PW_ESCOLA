function trocarCorDeFundo(){
    if(document.getElementById("corpo").style.backgroundColor == "red"){
        document.getElementById("corpo").style.backgroundColor = "blue"
        document.getElementById("max").style.color = "red"
    }
    else{
        document.getElementById("corpo").style.backgroundColor = "red"
        document.getElementById("max").style.color = "blue"
    }
}