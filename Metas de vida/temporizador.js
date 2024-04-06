// Adicionando o manipulador de eventos para cada botao
const buttons = document.querySelectorAll('.glow-on-hover');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const dataAtual = new Date("2024-04-06");
        const finalDoAno = new Date(dataAtual.getFullYear(), 11, 31, 23, 59, 59);
        const diferencaEmMilissegundos = finalDoAno - dataAtual;

        const diasRestantes = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const horasRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
        const segundosRestantes = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);

        const tempoRestante = "Tempo Restante ate o Final do Ano: " + diasRestantes + " dias, " + horasRestantes + " horas, " + minutosRestantes + " minutos, " + segundosRestantes + " segundos";

        // Exibir o tempo restante em um elemento da pagina
        console.log("Botao clicado!");
        document.getElementById('tempo-restante').textContent = tempoRestante;

        // Obtém o elemento com a classe 'abra-Conteudo'
        const conteudo = document.querySelector('.abra-Conteudo');

        // Verifica se o conteudo está visível
        if (conteudo.style.display === 'none') {
            // Se estiver oculto, exibe-o
            conteudo.style.display = 'block';
        } else {
            // Caso contrário, oculta-o
            conteudo.style.display = 'none';
        }
    });
}
