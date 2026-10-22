

//CODIGO JS PARA CONTRASEÑA (PAGINA CREAR)

const campo = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmarContrasena");
const boton = document.getElementById("btnOjo");
const dibujoOjo = document.getElementById("dibujoOjo");
const pupila = document.getElementById("pupila");

boton.addEventListener("click", function() {
    const mostrar = campo.type === "password";

    // Cambiar ambos campos al mismo tiempo
    campo.type = mostrar ? "text" : "password";
    confirmar.type = mostrar ? "text" : "password";

    if (mostrar) {
        // Ojo cerrado
        dibujoOjo.setAttribute(
            "d",
            "M3 3l18 18 M9.9 5.2A11.5 11.5 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.2-2.4 3.3 M6.2 6.2C3.9 7.6 2.2 10 1.5 12c1 2.5 4.5 7 10.5 7 1.4 0 2.6-.3 3.7-.8"
        );
        pupila.style.display = "none";
        boton.setAttribute("aria-label", "Ocultar contraseñas");
    } else {
        // Ojo abierto
        dibujoOjo.setAttribute(
            "d",
            "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"
        );
        pupila.style.display = "";
        boton.setAttribute("aria-label", "Mostrar contraseñas");
    }
});
