import { agregarAlCarrito } from "./funcionesCarrito.js";
import {obtenerCarrito } from "./storage.js";
import { actualizasContador, mostrarMensaje } from "./ui.js"

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito()
    actualizarCarrito(carrito)

    fetch("./data/productos.json")
    .then((response) => {
        if(response.ok)
            throw new Error(`Error HTTP status: ${response.status}`)
        return response.json();
    })
    .then((data) => {
        // hacemos l rendering de tarjetas con el for
    })
    .catch((error) => console.log(error));
});