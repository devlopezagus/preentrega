import {eliminarProducto, vaciarCarrito} from "./funcionesCarrito.js";
import {obtenerCarrito} from "./storage.js";
import {actualizarContador} from "./ui.js";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);


    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    // Limpiar el contenedor antes de renderizar
    contenedorCarrito.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("alert-carrito-vacio");
        mensaje.textContent = "🛒 Tu carrito está vacío. Agregá productos para continuar.";
        contenedorCarrito.appendChild(mensaje);
        return;     // dejamos de ejecutar el resto de la función
    }

    carrito.forEach((producto, indice) => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('producto-card'); 

        const img = document.createElement('img');
        img.alt = producto.nombre;
        img.src = `../${producto.imagen}`;

        const titulo = document.createElement('h3');
        titulo.classList.add('producto-nombre');
        titulo.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.classList.add('producto-precio');
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement('button');
        boton.classList.add('btn');
        boton.classList.add('btn-eliminar-carrito');
        boton.innerHTML = 'Eliminar';

        boton.addEventListener('click', () => {
            eliminarProducto(indice);
            renderizarCarrito();
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedorCarrito.appendChild(tarjeta);
    });

    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("btn");
    botonVaciar.classList.add("btn-vaciar-carrito");
    botonVaciar.textContent = "Vaciar Carrito";

    botonVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(botonVaciar);
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});