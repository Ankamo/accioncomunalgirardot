document.addEventListener("DOMContentLoaded", () => {
    // Cargar el contenido del head.html
    fetch("/hidden/html/head.html")
        .then((response) => response.text())
        .then((text) => {
            document.getElementById("head").innerHTML = text;
        })
        .catch((error) => console.error("Error al cargar head.html:", error));

    // Cargar el contenido del header.html
    fetch("/hidden/html/header.html")
        .then((response) => response.text())
        .then((text) => {
            document.getElementById("header").innerHTML = text;
        })
        .catch((error) => console.error("Error al cargar header.html:", error));

    // Cargar el contenido del footer.html
    fetch("/hidden/html/footer.html")
        .then((response) => response.text())
        .then((text) => {
            document.getElementById("footer").innerHTML = text;
        })
        .catch((error) => console.error("Error al cargar footer.html:", error));

    // Cargar el contenido del nav.html
    fetch("/hidden/html/nav.html")
        .then((response) => response.text())
        .then((text) => {
            document.getElementById("nav").innerHTML = text;
        })
        .catch((error) => console.error("Error al cargar nav.html:", error));

    // Inicializar AOS
    AOS.init();
});

