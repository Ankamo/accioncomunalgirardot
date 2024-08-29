document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.querySelector("#inicio h1");
    greeting.addEventListener("click", function() {
        alert("¡Gracias por visitar nuestro sitio!");
    });
});
