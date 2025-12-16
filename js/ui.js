export const actualizarContador = (carrito) => {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        // actualiza el texto del contador con la cantidad de items en el carrito
        contador.textContent = carrito.length;
    }
}

export const mostrarMensaje = (texto) => {
    Swal.fire(texto);
}


// formas de mensaje

// Swal.fire("Producto agregado al carrito");

// Swal.fire({
//   title: "¡Agregado!",
//   text: "El producto se agregó al carrito",
//   icon: "success",
//   confirmButtonText: "Aceptar"
// });

// Iconos disponibles: 'success', 'error', 'warning', 'info', 'question'