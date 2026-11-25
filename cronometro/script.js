let zerar = document.getElementById("zerar");
let tempo = document.getElementById("tempo");
let listaParada = document.getElementById("lista-parada");

let interval = null;
let tempoDecorrido = 0;
let inicio = 0;

function doisDigitos(valor) {
    return String(valor).padStart(2, "0");
}

function formatarTempo(ms) {
    let centesimos = Math.floor((ms % 1000) / 10);
    let segundos = Math.floor((ms / 1000) % 60);
    let minutos = Math.floor(ms / 60000);

    return `${doisDigitos(minutos)}:${doisDigitos(segundos)}:${doisDigitos(centesimos)}`;
}

tempo.addEventListener("click", () => {
    if (interval === null) {
        inicio = Date.now() - tempoDecorrido;

        interval = setInterval(() => {
            tempoDecorrido = Date.now() - inicio;
            tempo.textContent = formatarTempo(tempoDecorrido);
        }, 50);
    } else {
        clearInterval(interval);
        interval = null;

        let li = document.createElement("li");
        li.textContent = tempo.textContent;
        listaParada.appendChild(li);
    }
});

zerar.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    tempoDecorrido = 0;
    inicio = 0;
    tempo.textContent = "00:00:00";
    listaParada.innerHTML = "";
});