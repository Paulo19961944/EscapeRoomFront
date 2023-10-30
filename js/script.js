let button = document.querySelector("#btn");
button.addEventListener("click", Jogar);
let resultado = document.querySelector("#resultado");
let numero = Math.floor(Math.random() * 100) + 1; // Gere um número aleatório entre 1 e 100
let tentativas = 0;

function Jogar() {
    let input = parseInt(document.querySelector("#number").value); // Obtenha o valor do input dentro da função
    
    tentativas += 1;

    if (input < numero && tentativas < 5) {
        alert("Tente um número maior...");
    } else if (input > numero && tentativas < 5) {
        alert("Tente um número menor...");
    } else if (tentativas === 5) {
        // Exibir a mensagem final após o término do jogo
        alert("Você está morto!!! O Guardião dos portais infernais te matou com seus poderes mágicos e as Succubus e os Cães do Inferno comeram sua carne vivo. GAME OVER!!! O seu número da morte é: " + numero);
    } else {
        // Exibir a mensagem final após o término do jogo
        alert("Parabéns. O seu inimigo está morto e você conseguiu vencer o Guardião dos Portais Infernais. O seu número da sorte é: " + numero);
    }
            // Exibir uma caixa de diálogo perguntando se deseja continuar
            const continuar = confirm("Deseja continuar?");
            if (continuar) {
                location.reload(); // Recarrega a página
            } else {
                window.close(); // Fecha a janela
            }
}
