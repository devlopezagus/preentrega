const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

// agregamos "Storage" al nombre de la función para evitar conflictos
export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};