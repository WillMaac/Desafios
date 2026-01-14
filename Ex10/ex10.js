function verificarNumber(number){

if(typeof number !== "number" || number <= 0){
    return("Valor inválido!");
}
    return("Valor válido!");
    
}

console.log(verificarNumber(100));
console.log(verificarNumber("100"));
