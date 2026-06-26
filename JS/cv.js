// =============================
// Animación al cargar la página
// =============================

document.addEventListener("DOMContentLoaded", () => {

    const secciones = document.querySelectorAll("section");

    secciones.forEach((seccion, index) => {

        seccion.style.opacity = "0";
        seccion.style.transform = "translateY(20px)";

        setTimeout(() => {

            seccion.style.transition = "all .6s ease";
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";

        }, index * 150);

    });

});


// =============================
// Animación barras habilidades
// =============================

window.addEventListener("load", () => {

    const barras = document.querySelectorAll(".nivel");

    barras.forEach(barra => {

        const ancho = barra.style.width || getComputedStyle(barra).width;

        barra.style.width = "0";

        setTimeout(() => {

            barra.style.transition = "width 1.5s ease";
            barra.style.width = ancho;

        }, 300);

    });

});

// =============================
// Mostrar botón al hacer scroll
// =============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 150) {

        boton.style.opacity = "1";

    } else {

        boton.style.opacity = ".5";

    }

});