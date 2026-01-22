//Formatar preços

const precos = [10, 25.5, 100]

const formatarPreco = precos.map(valores => `R$ ${valores.toFixed(2)}`)

console.log(formatarPreco);
