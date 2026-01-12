function carrinhoCompra(produtos){
  let total = 0;
  for(const produto of produtos){
    total += produto.preco;
  }
  return total
}

console.log(carrinhoCompra(
  [
  { produto: "Camisa", preco: 50 },
  { produto: "Calça", preco: 120 },
  { produto: "Tênis", preco: 300 }
]

));
