// 1️⃣ Validar carrinho
function validarCarrinho(produtos) {
    if (!Array.isArray(produtos)) {
        return false;
    }

    if (produtos.length === 0) {
        return false;
    }

    return true;
}

// 2️⃣ Calcular subtotal
function calcularSubtotal(produtos) {
    let subtotal = 0;

    for (const produto of produtos) {
        if (typeof produto.preco !== "number" || produto.preco <= 0) {
            return {
                sucesso: false,
                mensagem: "Preço inválido no carrinho"
            };
        }

        subtotal += produto.preco;
    }

    return {
        sucesso: true,
        subtotal: subtotal
    };
}

// 3️⃣ Aplicar desconto
function aplicarDesconto(subtotal) {
    let percentual = 0;

    if (subtotal > 500) {
        percentual = 0.20;
    } else if (subtotal > 300) {
        percentual = 0.10;
    }

    const valorDesconto = subtotal * percentual;
    const valorFinal = subtotal - valorDesconto;

    return {
        percentualDesconto: percentual * 100,
        valorDesconto: valorDesconto,
        valorFinal: valorFinal
    };
}

// 4️⃣ Finalizar compra
function finalizarCompra(carrinho) {
    if (!validarCarrinho(carrinho)) {
        return {
            sucesso: false,
            mensagem: "Carrinho inválido"
        };
    }

    const resultadoSubtotal = calcularSubtotal(carrinho);

    if (!resultadoSubtotal.sucesso) {
        return resultadoSubtotal;
    }

    const desconto = aplicarDesconto(resultadoSubtotal.subtotal);

    return {
        sucesso: true,
        subtotal: resultadoSubtotal.subtotal,
        percentualDesconto: desconto.percentualDesconto,
        valorDesconto: desconto.valorDesconto,
        totalPagar: desconto.valorFinal
    };
}

// 🧪 Testes
const carrinho = [
    { nome: "Mouse", preco: 400 },
    { nome: "Teclado", preco: 200 }
];

console.log(finalizarCompra(carrinho));
