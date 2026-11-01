const modal = document.getElementById("modalPrueba");
const abrir = document.getElementById("abrirPrueba");
const cerrar = document.getElementById("cerrarPrueba");

abrir.addEventListener("click", () => {
    modal.hidden = false;
    cerrar.focus();
});

cerrar.addEventListener("click", () => {
    modal.hidden = true;
    abrir.focus();
});