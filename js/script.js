document.addEventListener("DOMContentLoaded", function() {
    let sortedNum = Math.floor(Math.random() * 100) + 1; // Gera número Aleatório
    let jogar = document.getElementById("jogar");
    let sim = document.getElementById("sim");
    let não = document.getElementById("nao");
    let tentativas = 0; // Numero de Tentativas

    jogar.addEventListener("click", Jogar);
    sim.addEventListener("click", Continuar);
    não.addEventListener("click", Encerrar);

    function Jogar() {
        let userNum = parseInt(document.getElementById("number").value);
        tentativas += 1;

        if (userNum == sortedNum) {
            window.location.href = "resultado.html";
        } else if (tentativas === 5) {
            window.location.href = "perdeu.html";
        } else if (userNum < sortedNum) {
            alert("Tente um número maior...");
        } else {
            alert("Tente um número menor...");
        }
    }

    function Continuar() {
        window.location.href = "https://www.paulo19961944.github.io/jogar.html";
    }

    function Encerrar() {
        window.close();
    }
});
