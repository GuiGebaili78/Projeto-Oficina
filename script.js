const formulario = document.getElementById("seu-formulario");

formulario.addEventListener("submit", async (evt) => {
    evt.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const veiculo = document.getElementById("veiculo").value;
    const placa = document.getElementById("placa").value;
    const data = document.getElementById("data").value;

    const dados = {
        nome,
        veiculo,
        placa,
        data,
    }

    try {
        const response = await fetch("http://localhost:1880/clientes", {
            method: 'POST',
            body: JSON.stringify(dados),
        });

        if (response.status === 200) {
            formulario.reset(); // Limpa o formulário
        } else {
            alert("Erro ao gravar novo cliente");
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao processar a solicitação");
    }
});
