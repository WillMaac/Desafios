 /*
 Um e-commerce precisa calcular o valor do frete.

 Entrada

valorCompra

 Regras

 Se valorCompra não for número ou ≤ 0 → "Valor inválido"

Se valorCompra ≥ 200 → "Frete grátis"

Caso contrário → "Frete: R$20"

*/

function ecommerce (valorCompra){
    if(typeof valorCompra !== "number" || valorCompra <=0){
        return "Valor inválido"
    }
    if(valorCompra >= 200){
        return "Frete grátis"
    }

    return "Frete: R$20"
}

console.log(ecommerce(20));
