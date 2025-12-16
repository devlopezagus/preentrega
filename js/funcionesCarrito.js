import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
    // obtener el carrito actual desde el almacenamiento
    const carrito = obtenerCarrito();
    // agregar el nuevo producto al carrito
    carrito.push(producto);

    // guardar el carrito actualizado en el almacenamiento
    guardarCarrito(carrito);

    // actualizar la interfaz de usuario
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito.");
}

export const eliminarProducto = (id) => {
    const carrito = obtenerCarrito();
    // splice para eliminar el producto en la posición id, modifica el carrito
    carrito.splice(id, 1);  // eliminar el producto en la posición id, solo 1 elemento
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito.");
}

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("El carrito ha sido vaciado.");
}