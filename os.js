document.addEventListener('DOMContentLoaded', function() {
    const tbodyOS = document.getElementById('tbody-os');
    const btnAddRow = document.querySelector('.btn-add-row');
    const btnToggleColumns = document.querySelector('.btn-toggle-columns');
    const colunaExtra = document.querySelectorAll('.coluna-extra');

    btnAddRow.addEventListener('click', function() {
        const newRowHtml = `
            <tr>
                <td><input type="number" class="form-control form-control-sm" name="quantidade[]" required></td>
                <td><input type="text" class="form-control form-control-sm" name="descricao[]" required></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm" name="preco_unitario[]" required></td>
                <td><input type="number" step="0.01" class="form-control form-control-sm" name="preco_final[]" readonly></td>
                <td class="coluna-extra d-none"><input type="text" class="form-control form-control-sm" name="garantia[]" /></td>
                <td class="coluna-extra d-none"><input type="text" class="form-control form-control-sm" name="fabricante[]" /></td>
                <td class="coluna-extra d-none"><input type="date" class="form-control form-control-sm" name="data_fabricacao[]" /></td>
                <td class="coluna-extra d-none"><input type="text" class="form-control form-control-sm" name="nota_fiscal[]" /></td>
                <td class="text-center"><button type="button" class="btn btn-danger btn-remove-row">Remover</button></td>
            </tr>
        `;

        // Cria um elemento tr a partir do HTML
        const newRow = document.createElement('tr');
        newRow.innerHTML = newRowHtml;

        // Adiciona a nova linha à tabela
        tbodyOS.appendChild(newRow);
    });

    // Event listener para remover linhas
    tbodyOS.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-remove-row')) {
            const rowToRemove = event.target.closest('tr');
            rowToRemove.remove();
        }
    });

    // Event listener para mostrar/ocultar colunas extras
    btnToggleColumns.addEventListener('click', function() {
        colunaExtra.forEach(function(col) {
            col.classList.toggle('d-none');
        });
    });
});
