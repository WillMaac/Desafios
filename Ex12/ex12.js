function verificarNumero(number1, number2, number3) {
    if(typeof number1 !== "number" ||
        typeof number2 !== "number" ||
        typeof number3 !== "number"
    ){
        return "Número inválido"
    }
    if(number1 > number2 && number1 > number3){
        return number1
    }
    else if(number2 > number3){
        return number2
    }
    return number3
}

console.log(verificarNumero(10, 5, 6));
console.log(verificarNumero(10, 20, 6));
console.log(verificarNumero(10, 20, 50));
console.log(verificarNumero("10, 20, 50"));
