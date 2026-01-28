/*
 Criar um contador que:

Começa em 10

Imprime no console a cada 1 segundo

Quando chegar em 0, o contador para sozinho

Ao parar, imprime:
👉 "Contagem finalizada"
 */

let contador = 10;
const intervalo = setInterval(()=>{
    console.log(contador);
    
    
    if(contador === 0 ){
        console.log("Contagem finalizada");
        clearInterval(intervalo)
        return;
        
    }
    contador--
}, 1000)


