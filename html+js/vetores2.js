
let vetor = [1,3,4,8,45,77,88,12,1]
let m = vetor[0]
for(let i = 0; i<vetor.length; i++){
    console.log(vetor[i])
    if(vetor[i]>m){
        m = vetor[i]
    }
}

console.log("o maior é "+m)


