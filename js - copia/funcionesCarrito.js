import {guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizasContador, mostrarMensaje } from "./ui.js"

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);

    guardarCarrito(carrito);

    actualizasContador(carrito);
    mostrarMensaje("Producto agregado al carrito");
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizasContador(carrito);
    mostrarMensaje("Producto eliminado del carrito");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizasContador([]);
    mostrarMensaje("Carrito vaciado");;
}