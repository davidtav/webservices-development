// Esse arquivo trata de atualizar os registros e salvar no db.json

// UPDATE do CRUD

import { servicesApi } from "../api-service/services.js";

const getURL = new URL(window.location);
const id = getURL.searchParams.get('id');
const inputNome = document.querySelector('[data-nome]');
const inputPeso = document.querySelector('[data-peso]');
const inputAltura = document.querySelector('[data-altura]');
const inputGordura = document.querySelector('[data-gordura]');

servicesApi.detalhaPaciente(id).then(dados=>{
    inputNome.value = dados.nome;
    inputPeso.value = dados.peso;
    inputAltura.value = dados.altura;
    inputGordura.value = dados.gordura;
})

const form = document.querySelector('[data-form]');

form.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    servicesApi.atualizaPaciente(id,inputNome.value,inputPeso.value,inputAltura.value,inputGordura.value).then(()=>{
        alert('Paciente atualizado com sucesso!');
        window.location.href = '../index.html';
    })
})