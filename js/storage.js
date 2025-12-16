// Llave para almacenar el carrito en el localStorage
const KEY = "carrito"

// Guarda el carrito en el localStorage
export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

// Obtiene el carrito del localStorage
export const obtenerCarrito = () => {
    const carritoJSON = localStorage.getItem(KEY);
    return carritoJSON ? JSON.parse(carritoJSON) : [];
};

// Vacía el carrito en el localStorage
export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};