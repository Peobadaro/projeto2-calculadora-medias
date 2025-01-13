// Seletores de elementos no DOM
const atividadeInput = document.querySelector("#atividade");
const notaInput = document.querySelector("#nota");
const adicionarBtn = document.querySelector("#btn-adicionar");
const tabelaCorpo = document.querySelector("#tabela-corpo");
const mediaFinal = document.querySelector("#media-final");
const aprovadoFinal = document.querySelector("#aprovado-final");

let notas = [];

// Evento para adicionar uma nova atividade
adicionarBtn.addEventListener("click", () => {
  const atividade = atividadeInput.value.trim();
  const nota = parseFloat(notaInput.value.trim());

  // Validação para entradas
  if (atividade === "" || isNaN(nota) || nota < 0 || nota > 10) {
    alert("O valor deve ser entre 0 e 10.");
    return;
  }

  // Criação de uma nova linha na tabela
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${atividade}</td>
    <td>${nota.toFixed(1)}</td>
    <td>${
      nota >= 7
        ? '<img src="images/aprovado.png" alt="Aprovado" style="width: 20px;">'
        : '<img src="images/reprovado.png" alt="Reprovado" style="width: 20px;">'
    }</td>
  `;
  tabelaCorpo.appendChild(novaLinha);

  // Adicionar a nota ao array e limpar os campos de entrada
  notas.push(nota);
  atividadeInput.value = "";
  notaInput.value = "";
  calcularMedia();
});

// Função para calcular a média final
function calcularMedia() {
  if (notas.length === 0) {
    mediaFinal.textContent = "---";
    aprovadoFinal.textContent = "---";
    return;
  }

  // Cálculo da média
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;

  // Atualização do estado de aprovação e exibição da média
  mediaFinal.textContent = media.toFixed(1);
  aprovadoFinal.innerHTML =
    media >= 7
      ? '<img src="images/aprovado.png" alt="Aprovado" style="width: 20px;">'
      : '<img src="images/reprovado.png" alt="Reprovado" style="width: 20px;">';
}

function calcularMedia() {
  if (notas.length === 0) {
    mediaFinal.textContent = "---";
    aprovadoFinal.textContent = "---";
    aprovadoFinal.className = ""; // Remove classes de estilo
    return;
  }

  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;

  mediaFinal.textContent = media.toFixed(2);

  if (media >= 7) {
    aprovadoFinal.textContent = "Aprovado";
    aprovadoFinal.className = "aprovado"; // Adiciona a classe de aprovado
  } else {
    aprovadoFinal.textContent = "Reprovado";
    aprovadoFinal.className = "reprovado"; // Adiciona a classe de reprovado
  }
}
