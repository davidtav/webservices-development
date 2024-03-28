// Esse arquivo trata de exibir os dados do db.json para o index.html

// READ do CRUD
import { servicesApi } from "../api-service/services.js";

const criaNovaLinha = (nome, peso, altura, gordura, imc,id) => {
  const linhaNovoPaciente = document.createElement("tr");
  const conteudo = `
    <td class="info-nome">${nome}</td>
	  <td class="info-peso">${peso}</td>
	  <td class="info-altura">${altura}</td>
	  <td class="info-gordura">${gordura}</td>
	  <td class="info-imc">${calculaImc(peso, altura)}</td>
    <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/atualizarPaciente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir">Excluir</button></li>
      </ul>
    </td>`
    linhaNovoPaciente.innerHTML = conteudo;
    linhaNovoPaciente.dataset.id=id;
    return linhaNovoPaciente
};



const tabela = document.querySelector("[data-tabela]");

// Deletar registro da tabela
tabela.addEventListener('click',(evento)=>{
  let botaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
  if(botaoDeletar){
      const deletarPaciente = evento.target.closest('[data-id]')
      let id = deletarPaciente.dataset.id
      servicesApi.removePaciente(id).then(()=>{
          deletarPaciente.remove()
      })
  }
})



servicesApi.listaPacientes().then((data) => {
  data.forEach((element) => {
    tabela.appendChild(
      criaNovaLinha(
        element.nome,
        element.peso,
        element.altura,
        element.gordura,
        element.imc,
        element.id
      )
    );
  });
});
