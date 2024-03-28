// Esse arquivo trata de criar novos registros e salvar no db.json

// CREATE do CRUD

import { servicesApi } from "../api-service/services.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome =evento.target.querySelector('[data-nome]').value;
    const peso =evento.target.querySelector('[data-peso]').value;
    const altura =evento.target.querySelector('[data-altura]').value;
    const gordura =evento.target.querySelector('[data-gordura]').value;
   
    //inserir aqui todas as informações, inclusive o IMC
    servicesApi.criaPacientes(nome, peso, altura, gordura).then(()=>{
        alert('Paciente cadastrado com sucesso!');
        window.location.href = '../index.html';
    })
    console.log(form);
});

