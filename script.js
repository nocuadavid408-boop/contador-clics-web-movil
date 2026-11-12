// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tbody = document.getElementById("tabla-registros");

// Variable de estado: guarda cuántos clics van
let likes = 0;

// 2. Escuchar el evento click y manipular el DOM
function obtenerHora() {
  const ahora = new Date();
  const h = String(ahora.getHours()).padStart(2, "0");
  const m = String(ahora.getMinutes()).padStart(2, "0");
  const s = String(ahora.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function actualizarContador() {
  textoContador.textContent = likes;
  textoContador.classList.toggle("alto", likes > 10);
}

boton.addEventListener("click", () => {
  likes++;
  actualizarContador();

  const hora = obtenerHora();
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  const celdaHora = document.createElement("td");

  celdaNumero.textContent = likes;
  celdaHora.textContent = hora;

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);

  // prepend: el registro más reciente queda arriba
  tbody.prepend(fila);
});

const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");

botonRestar.addEventListener("click", () => {
  if (likes > 0) {
    likes--;
    actualizarContador();
  }
});

botonReiniciar.addEventListener("click", () => {
  likes = 0;
  actualizarContador();
  tbody.innerHTML = "";
});