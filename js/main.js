import { CadastroFactory } from './models/cadastroFactory.js';

function buscarUsuario(termo) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const termoLower = termo.trim().toLowerCase();

  return usuarios.find(usuario =>
    usuario.email.toLowerCase() === termoLower
  );
}

function formatarExibicaoDados(rotulo, valor) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${rotulo}:</strong> ${valor}`;
  return p;
}

function formataExibicaoCampos(x, usuario) {
    x.appendChild(formatarExibicaoDados("Nome", usuario.nome));
    x.appendChild(formatarExibicaoDados("Data de Nascimento", usuario.dataNascimento));
    x.appendChild(formatarExibicaoDados("Telefone", usuario.telefone));
    x.appendChild(formatarExibicaoDados("Email", usuario.email));
}

const form = document.querySelector('.form-cadastro');
const nomeInput = document.querySelector('#nome');
const dataInput = document.querySelector('#dataNascimento');
const telefoneInput = document.querySelector('#telefone');
const emailInput = document.querySelector('#email');
const botaoConsultar = document.querySelector("#btn-consultar");
const inputConsulta = document.querySelector("#input-consulta");
const resultadoConsulta = document.querySelector("#resultado-consulta");
const inputDeletar = document.querySelector("#input-deletar");
const botaoDeletar = document.querySelector("#btn-deletar");
const resultadoDelecao = document.querySelector("#resultado-delecao");
const botaoListar = document.querySelector("#btn-listar");
const resultadoListagem = document.querySelector("#resultado-listagem");

// Cadastrar Dados
form.addEventListener('submit', e => {
  e.preventDefault();

  const novoUsuario = new CadastroFactory(
    nomeInput.value,
    dataInput.value,
    telefoneInput.value,
    emailInput.value
  );

  const usuariosExistentes = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuariosExistentes.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuariosExistentes));
  form.reset();
});
 
// Consultar dados
botaoConsultar.addEventListener("click", () => {
  resultadoConsulta.innerHTML = "";
  const emailBuscado = inputConsulta.value;
  const usuarioEncontrado = buscarUsuario(emailBuscado);

  if (usuarioEncontrado) {
    const titulo = document.createElement("h3");
    titulo.textContent = "Usuário Encontrado:";
    resultadoConsulta.appendChild(titulo);

    formataExibicaoCampos(resultadoConsulta, usuarioEncontrado)
  } else {
    resultadoConsulta.textContent = "Nenhum usuário encontrado com esse email.";
  }
});

// Deletar usuário
botaoDeletar.addEventListener("click", () => {
  resultadoDelecao.innerHTML = "";
  const registroParaDeletar = inputDeletar.value;
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = buscarUsuario(registroParaDeletar);

  if (usuario === null || usuario === undefined) {
    resultadoDelecao.textContent = "Nenhum usuário encontrado com esse email.";
    return;
  }

  const confirmacao = confirm(`Deseja realmente deletar o usuário ${usuario.nome}?`);
  if (confirmacao === false) {
    return;
  }

  const usuariosAtualizados = usuarios.filter(u =>
    u.email.toLowerCase() !== usuario.email.toLowerCase()
  );

  localStorage.setItem("usuarios", JSON.stringify(usuariosAtualizados));

  const msg = document.createElement("p");
  msg.innerHTML = `Usuário <strong>${usuario.nome}</strong> foi removido com sucesso.`;
  resultadoDelecao.appendChild(msg);
});

// Listar Todos Usuários
function listarTodosUsuarios() {
  resultadoListagem.innerHTML = "";
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.length === 0) {
    resultadoListagem.textContent = "Nenhum usuário cadastrado.";
    return;
  }

  usuarios.forEach((usuario, index) => {
    const container = document.createElement("div");
    container.classList.add("usuario-card");

    const numero = document.createElement("h4");
    numero.textContent = `Usuário ${index + 1}`;
    container.appendChild(numero);

    formataExibicaoCampos(container, usuario);
    resultadoListagem.appendChild(container);
  });
}

botaoListar.addEventListener("click", listarTodosUsuarios);