// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tbody = document.getElementById("tabla-registros");

// Variable de estado: guarda cuántos clics van
let likes = 0;