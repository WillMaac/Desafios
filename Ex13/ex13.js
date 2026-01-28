const soma = (inicio, fim) =>{
    if(typeof inicio !== "number" || typeof fim !== "number"){
        return "Número inválido"
    }
    if(inicio > fim){
        return "Erro"
    }

    let contador = [];
    for(let i = inicio; i <= fim; i++){
         contador.push(i)
    }
    return contador
}

console.log(soma(20, 10));
console.log(soma(1, 20));
