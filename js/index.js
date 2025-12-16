// me trae las funciones necesarias para crear las tarjetas y manejar el carrito
import { agregarAlCarrito } from './carrito.js';
// me trae la funcion para obtener el carrito almacenado (en localStorage)
import { obtenerCarrito } from './storage.js';
import {actualizarContador, mostrarMensaje } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // contenedor de las tarjetas (es un section en el html)
    const contenedor = document.getElementById('contenedor-tarjetas');
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch('../data/productos.json')
        .then((res) => {    // respuesta del servidor
            if (!res.ok) {
                throw new Error('Error al cargar los productos');
            }

            return res.json();
        })
        .then(data => {     // data es el array de productos
            // hacer todo el renderind de tarjetas con el for
            data.forEach((producto, index) => {
                // crear la tarjeta
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
                boton.innerHTML = '&#128722; Agregar';

                // agregar evento al boton
                boton.addEventListener('click', () => {
                    agregarAlCarrito(producto); // argumento cuando lo envio
                });

                // armo la tarjeta con los elementos
                tarjeta.appendChild(img);
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(precio);
                tarjeta.appendChild(boton);

                // agrego la tarjeta al contenedor
                contenedor.appendChild(tarjeta);

            })
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarMensaje('Error al cargar los productos. Por favor, intente nuevamente más tarde.');
        });
    
});