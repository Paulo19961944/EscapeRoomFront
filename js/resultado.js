document.addEventListener("DOMContentLoaded", function() {
    let sim = document.getElementById("sim");
    let não = document.getElementById("nao");

    sim.addEventListener("click", Continuar);
    não.addEventListener("click", function() {
        const confirmClose = window.confirm("Deseja realmente fechar a janela?");
        if (confirmClose) {
            alert("A janela não pode ser fechada automaticamente por motivos de segurança. Por favor, feche-a manualmente usando os controles do navegador.");
        }
    });
    
});

function Continuar() {
    window.location.href = "https://www.paulo19961944.github.io/jogar.html";
}
