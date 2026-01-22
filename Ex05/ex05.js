const listPresenca =(presentes)=>{
    const list = {
        presentes: 0,
        ausentes: 0
    };
    
    for(const alunos of presentes){
if(alunos === true){
        list.presentes++
    }
    else{
        list.ausentes++
    }
    }
    return list
}

console.log(listPresenca([true, false, true, true, false, true])
)