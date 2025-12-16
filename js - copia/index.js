import { agregarAlCarrito } from "./funcionesCarrito.js";
import {obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js"

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    fetch("./data/productos.json")
    .then((response) => {
        if(response.ok)
            throw new Error(`Error HTTP status: ${response.status}`)
        return response.json();
    })
    .then((data) => {
        // hacemos l rendering de tarjetas con el for
        data.forEach((producto) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("producto-card");

            const img = document.createElement("img");
            img.src = `../${producto.img}`;
            img.alt = producto.nombre;
            const nombre = document.createElement("h3");
            nombre.classList.add("producto-nombre");
            nombre.textContent = producto.nombre;
            const precio = document.createElement("p");
            precio.classList.add("producto-precio");
            precio.textContent = `$${producto.precio}`;
            const boton = document.createElement("button");
            boton.innerHTML = "&#128722; Agregar al carrito";
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);
                const carritoActualizado = obtenerCarrito();
                actualizarContador(carritoActualizado);
                mostrarMensaje(`Se agregó ${producto.nombre} al carrito.`);
            });

            tarjeta.appendChild(img);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(boton);
            contenedor.appendChild(tarjeta);
        });
    })
    .catch((error) => console.log(error));
});