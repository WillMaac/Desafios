const getMinNumber
 = (numbers
) => {
    if(!Array.isArray(numbers)){
        return "Esse valor nao é  um array"
    }
    if(numbers.length == 0){
        return "O array está vazio!"
    }
    let resultado = numbers[0]
    
    for(const  number of numbers){
        if(typeof number !== "number"){
            return "Esse valor nao é um número"
        }
         if(number < resultado){
            resultado  = number
        }
        
    }
    return resultado  
}
console.log(getMinNumber(

[
10, 20, 30]))