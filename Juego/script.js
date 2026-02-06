let numeroSecreto;
let intentos;
let historial;

const entrada = document.getElementById("entrada");
const boton = document.getElementById("btnAdivinar");
const resultado = document.getElementById("resultado");
const historialTexto = document.getElementById("historial");
const intentosRestantesTexto = document.getElementById("intentosRestantes");
const botonReiniciar = document.getElementById("reiniciar");

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 10;
    historial = [];

    resultado.textContent = "";
    historialTexto.textContent = "";
    intentosRestantesTexto.textContent = "Intentos restantes: " + intentos;

    entrada.disabled = false;
    boton.disabled = false;
    botonReiniciar.style.display = "none";
}

function terminarJuego(mensaje) {
    resultado.textContent = mensaje;
    entrada.disabled = true;
    boton.disabled = true;
    botonReiniciar.style.display = "inline";
}

boton.addEventListener("click", () => {

    const numeroUsuario = Number(entrada.value);

    if (!numeroUsuario || numeroUsuario < 1 || numeroUsuario > 100) {
        resultado.textContent = "Ingresa un número válido entre 1 y 100.";
        return;
    }

    historial.push(numeroUsuario);
    historialTexto.textContent = "Números probados: " + historial.join(", ");

    if (numeroUsuario === numeroSecreto) {
        terminarJuego("🎉 ¡Correcto! Adivinaste el número.");
        return;
    }

    intentos--;

    if (numeroUsuario < numeroSecreto) {
        resultado.textContent = "Te quedaste corto.";
    } else {
        resultado.textContent = "Te pasaste.";
    }

    intentosRestantesTexto.textContent = "Intentos restantes: " + intentos;

    if (intentos === 0) {
        terminarJuego("Se acabaron los intentos. El número era " + numeroSecreto);
    }

    entrada.value = "";
});

botonReiniciar.addEventListener("click", iniciarJuego);

iniciarJuego();
