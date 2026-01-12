/*
Um caixa eletrônico precisa validar um saque.

 Entradas

saldo

valorSaque

 Regras

 Se valorSaque não for válido → "Valor inválido"

Se valorSaque ≤ 0 → "Valor inválido"

Se valorSaque > saldo → "Saldo insuficiente"

Caso contrário → "Saque realizado com sucesso"
*/

function bank(saldo, valorSaque){

if(typeof  saldo !== "number" || saldo < 0 || typeof valorSaque !== "number" || valorSaque <= 0){
return("Valor inválido");
}
 if(valorSaque > saldo){
    return("Saldo insuficiente");   
}
    return("Saque realizado com sucesso!");
    
}

console.log(bank(100, 50));
