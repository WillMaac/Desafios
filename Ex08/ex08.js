
function desconto(totalCompra) {
    if (typeof totalCompra !== "number" || totalCompra <= 0) {
        return "Valor inválido";
    }

    let valorDesconto = 0;

    if (totalCompra > 500) {
        valorDesconto = totalCompra * 0.20;
    } else if (totalCompra > 300) {
        valorDesconto = totalCompra * 0.10;
    }

    return {
        totalOriginal: totalCompra,

        desconto: valorDesconto,
        totalFinal: totalCompra - valorDesconto
    };
}

console.log(desconto(400));
console.log(desconto(100));

