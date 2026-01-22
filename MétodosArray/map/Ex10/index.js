const produtos =[{nome:"Mouse", preco:99.99}]

const produto = produtos.map(p => `Produto: ${p.nome} | Preço: R$ ${p.preco.toFixed(2)}`)

console.log(produto);
