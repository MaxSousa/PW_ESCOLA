let frutas = ["maçã", "banana", "Uva"];
frutas[0] = "kiwi";
frutas.push("Laranja");
frutas.unshift("pitaya");
frutas.pop();
frutas.shift();
frutas.splice(1,2, "romã", "cereja")
console.log(frutas);
console.log(frutas.length)

for(let i=0;i<frutas.length;i++){
    console.log(frutas[i])
}
