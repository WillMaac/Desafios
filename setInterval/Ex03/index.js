/*
Criar um contador que:

Começa em 1

Incrementa de 1 em 1

Executa a cada 1 segundo

Quando chegar em 3, pausa por 2 segundos

Depois continua até chegar em 6

Ao final, imprime:
👉 "Processo finalizado"
*/
let contador =  1;
let intervalo;
function iniciarContador (){
    
     intervalo = setInterval(()=>{
        console.log(contador);
        if(contador === 3){
    clearInterval(intervalo);
    setTimeout(()=>{
        contador++
        iniciarContador();
    }, 2000);
    return;
        }
        if(contador === 6){
            clearInterval(intervalo)
            console.log("Processo finalizado");
            return;
            
        }
        contador++;
}, 1000);
}

iniciarContador();

    