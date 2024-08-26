function calcularAntecessor() {
    // Obtém o valor do input
    let valor = document.getElementById('valor').value;

    // Verifica se o valor é um número e não está vazio
    if (valor === '' || isNaN(valor)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    // Converte o valor para inteiro
    valor = parseInt(valor, 10);

    // Calcula o antecessor
    let antecessor = valor - 1;

    // Exibe o resultado
    document.getElementById('resultado').innerText = `O antecessor de ${valor} é ${antecessor}.`;
}
