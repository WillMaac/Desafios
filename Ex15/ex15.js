const maior = (array)=>{
if(!Array.isArray(array)){
return "Nao é   um array"
}if (array.length === 0) {
        return "Array vazio";
    }

    let novoN = array[0]



for(const numero of array){
    if(typeof numero !== "number"){
        return"Esse valor nao  é um número"
        }

            


        if(numero  > novoN){
            novoN = numero
        }
    }
    return novoN
}

console.log(maior([1, 2, 3, 4, 5, 10]))
