const soma = (array)=>{
    let total = 0;
    if( !Array.isArray(array)){
        return "Valor inválido"

    }
    if(array.length == 0){
    return "O array esta vazio"
    }

    for( const number of array) {
        if (typeof number   !== "number") {
            return  " Valor inválido"
        }
        total = total +  number
    
    }

}
    return total
}

console.log(soma([10, 20, 30]));
