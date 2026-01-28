/*
Criar um temporizador que:

Começa em 0

Incrementa de 1 em 1

Executa a cada 500ms

Para automaticamente quando chegar em 5

Ao parar, imprime:
👉 "Tempo esgotado"
*/

let temporizador =  0;

const intervalo = setInterval(() => {
    console.log(temporizador);
    
    if(temporizador === 5){
        console.log("Tempo esgotado");
        
        return clearInterval(intervalo)
        
    }
    temporizador++
}, 500);