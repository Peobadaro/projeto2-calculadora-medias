// seleção de elementos
const atividadeInput = document.querySelector("#atividade");
const notaInput = document.querySelector("#nota");
const adicionarBtn = document.querySelector("#btn-adicionar");
const tabelaCorpo = document.querySelector("#tabela-corpo");
const mediaFinal = document.querySelector("#media-final");
const aprovadoFinal = document.querySelector("#aprovado-final");

let notas = [];

// função para adicionar uma atividade
adicionarBtn.addEventListener("click", () => {
  const atividade = atividadeInput.value.trim();
  const nota = parseFloat(notaInput.value.trim());

  // validação
  if (!atividade || isNaN(nota) || nota < 0 || nota > 10) {
    alert("Insira uma atividade válida e uma nota entre 0 e 10.");
    return;
  }

  // adiciona a atividade à tabela
  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td>${atividade}</td>
    <td>${nota.toFixed(1)}</td>
    <td>${nota >= 6 ? "Sim" : "Não"}</td>
  `;
  tabelaCorpo.appendChild(linha);

  // adiciona a nota ao array
  notas.push(nota);

  // limpa os campos
  atividadeInput.value = "";
  notaInput.value = "";

  // atualiza a média
  calcularMedia();
});

// função para calcular a média
function calcularMedia() {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;

  mediaFinal.textContent = media.toFixed(1);
  aprovadoFinal.textContent = media >= 6 ? "Sim" : "Não";
}
