const averageValue = (notas)=>{
if(!Array.isArray(notas)){
    return "Nao é um array"
}

if(notas.length === 0){
    return "O array está vazio"
}

let min = notas[0]
let max = notas[0]
let soma = 0

for(const nota of notas){
    if(typeof nota !== "number"){
        return "Esse valor nao é um número"
    }
    soma += nota

    if(nota < min){
        min = nota
    }
     if(nota > max){
        max = nota
    }
}

return {
  min: min,
  max: max,
  soma: soma,
  media: soma / notas.length
}
}

console.log(averageValue([10, 10]));
