//Extrair apenas uma propriedade de objetos

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 }
]


const extrairNome = pessoas.map(pessoa=> pessoa.nome
)

console.log(extrairNome);
