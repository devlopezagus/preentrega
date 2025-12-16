// contadorGlobal para el carrito en resto de documentos
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador(obtenerCarrito());
});
