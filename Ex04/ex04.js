const relatorioVendas =(produtos)=>{
relatorio = {};
for(const produto of produtos){
    if(relatorio[produto]){
        relatorio[produto]++
    }else{
        relatorio[produto] = 1
    }
}
return relatorio
}

console.log(relatorioVendas(["Kitsune", "Kyotaka", "Han", "Kitsune"]));
