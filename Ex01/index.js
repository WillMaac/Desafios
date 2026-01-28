/*
Um sistema de portaria precisa decidir se uma pessoa pode entrar.

Regras:

Se idade ≥ 18 → Acesso permitido
Se idade < 18 → Acesso negado
Se idade não for informada → Dados inválidos
*/

const age = 16;

if(typeof age !== "number" || age < 0){
    console.log("Dados inválidos"); 
}else if(age >= 18){
    console.log("Acesso permitido");  
}else{
    console.log("Acesso negado");
    
}