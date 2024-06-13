document.addEventListener('DOMContentLoaded', function() {
    const tbodyOS = document.getElementById('tbody-os');
    const btnAddRow = document.querySelector('.btn-add-row');

    btnAddRow.addEventListener('click', function() {
        const newRowHtml = `
            <tr>
                <td><input type="number" class="form-control" name="quantidade[]" required></td>
                <td><input type="text" class="form-control" name="descricao[]" required></td>
                <td><input type="number" step="0.01" class="form-control" name="preco_unitario[]" required></td>
                <td><input type="number" step="0.01" class="form-control" name="preco_final[]" readonly></td>
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
});