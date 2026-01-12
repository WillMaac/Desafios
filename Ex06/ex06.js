const cadastroUsers =(users)=>{
    listUsers =[]



    for(const user of users){
        if(user.idade >= 18){
              listUsers.push(user.nome)
        }
    }
return listUsers
}

console.log(cadastroUsers
    ([
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 16 },
  { nome: "Maria", idade: 25 }
]
)
);
