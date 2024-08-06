document.addEventListener("DOMContentLoaded", function () {
  const tbodyOS = document.getElementById("tbody-os");
  const btnAddRow = document.querySelector(".btn-add-row");
  const btnToggleColumns = document.querySelector(".btn-toggle-columns");

  // Adicionar nova linha a tabela da OS
  btnAddRow.addEventListener("click", function () {
    const newRowHtml = `
            <tr>
                <td><input type="number" class="form-control form-control-sm" name="quantidade[]" required /></td>
                <td><input type="text" class="form-control form-control-sm" name="descricao[]" required /></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm" name="preco_unitario[]" required /></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm" name="preco_final[]" readonly /></td>
                <td class="coluna-extra extras-hidden"><input type="text" class="form-control form-control-sm" name="auto-pecas[]" /></td>
                <td class="coluna-extra extras-hidden"><input type="text" class="form-control form-control-sm" name="valor[]" /></td>
                <td class="coluna-extra extras-hidden"><input type="text" class="form-control form-control-sm" name="obs[]" /></td>
                <td class="coluna-extra extras-hidden"><input type="text" class="form-control form-control-sm" name="obs[]" /></td>
                <td class="text-center"><button type="button" class="btn btn-danger btn-remove-row">Remover</button></td>
            </tr>
        `;

    const newRow = document.createElement("tr");
    newRow.innerHTML = newRowHtml;

    // Adiciona a nova linha à tabela
    tbodyOS.appendChild(newRow);
  });

  // Remover linha
  tbodyOS.addEventListener("click", function (event) {
    if (event.target.classList.contains("btn-remove-row")) {
      const rowToRemove = event.target.closest("tr");
      rowToRemove.remove();
    }
  });

  // Mostrar/ocultar colunas extras
  btnToggleColumns.addEventListener("click", function () {
    const colunaExtra = document.querySelectorAll(".coluna-extra");
    colunaExtra.forEach(function (col) {
      col.classList.toggle("extras-hidden");
    });
  });
});
