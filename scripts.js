let minutos = 0;
let segundos = 0;
let milesimos = 0;
let cron;
let h1 = document.querySelector("h1");

function start() {
    stop(); // Pausa o cronômetro antes de iniciar para evitar múltiplos intervalos
    cron = setInterval(timer, 10);
}

function stop() {
    clearInterval(cron);
}

function reset() {
    stop();
    minutos = 0;
    segundos = 0;
    milesimos = 0;
    atualizarDisplay();
}

function timer() {
    milesimos += 10;
    if (milesimos == 1000) {
        milesimos = 0;
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
        }
    }
    atualizarDisplay();
}

function atualizarDisplay() {
    let centesimos = Math.floor(milesimos / 10);
    let display = (minutos < 10 ? "0" + minutos : minutos) + ":" +
                  (segundos < 10 ? "0" + segundos : segundos) + "." +
                  (centesimos < 10 ? "0" + centesimos : centesimos);
    h1.innerHTML = display;
}

// Inicializa o display
atualizarDisplay();