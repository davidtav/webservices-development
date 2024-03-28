//POST / CREATE 

//inserir aqui todas as informações, inclusive o IMC
const criaPacientes = (nome,peso,altura,gordura) => { 
    return fetch('http://localhost:3000/pacientes',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nome:nome,
            peso:peso,
            altura:altura,
            gordura:gordura,
            
            
        })
    }).then(resposta=>{return resposta.body})
}


//GET  / READ 
const listaPacientes = () => { 
    return fetch('http://localhost:3000/pacientes').then(resposta=>{
        return resposta.json()
    })
}
//PUT / UPDATE

const detalhaPaciente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}
const atualizaPaciente = (id,nome,peso,altura,gordura)=>{
    return fetch(`http://localhost:3000/pacientes/${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nome:nome,
            peso:peso,
            altura:altura,
            gordura:gordura
                     
        })
    }).then(resposta=>{
        return resposta.json()
    })
}





//DELETE / DELETE

const removePaciente = (id) => {
    return fetch(`http://localhost:3000/pacientes/${id}`, {
        method: 'DELETE'
    })
}





//EXPORT FUNCTIONS
export const servicesApi = {
    listaPacientes,
    criaPacientes,
    atualizaPaciente,
    detalhaPaciente,
    removePaciente
}