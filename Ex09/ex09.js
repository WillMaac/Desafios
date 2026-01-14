function desconto(totalCompra) {
    if (typeof totalCompra !== "number" || totalCompra <= 0) {
        return {
            sucesso: false,
            mensagem: "Valor inválido. Informe um valor numérico maior que zero."
        };
    }

    let percentual = 0;

    if (totalCompra > 500) percentual = 0.20;
    else if (totalCompra > 300) percentual = 0.10;

    const valorDesconto = +(totalCompra * percentual).toFixed(2);
    const valorFinal = +(totalCompra - valorDesconto).toFixed(2);

    return {
        sucesso: true,
        totalOriginal: totalCompra,
        percentualDesconto: percentual * 100,
        valorDesconto,
        valorFinal
    };
}
