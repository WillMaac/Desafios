function imparPar(number){
    if(typeof number !== "number"){
        return "Número inválido!"
    }
    if(number % 2 == 0 ){
        return "Par"
    }
    
        return "Ímpar" 
    }
console.log(imparPar(4));
console.log(imparPar(5));
console.log(imparPar("5"));
