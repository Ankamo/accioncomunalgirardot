(function() {
    /* Configuración */
    var due_date = new Date('2024-09-10'); // Fecha de vencimiento
    var days_before_opacity = 10; // Días antes de la fecha de vencimiento para comenzar a opacar
    /* Fin de la configuración */

    var current_date = new Date();
    var utc_due_date = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
    var utc_current_date = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());

    // Calcular los días restantes hasta la fecha de vencimiento
    var days_remaining = Math.floor((utc_due_date - utc_current_date) / (1000 * 60 * 60 * 24));

    // Inicializar opacidad
    var opacity = 1;

    if (days_remaining <= days_before_opacity && days_remaining >= 0) {
        // Calcular opacidad linealmente desde 1 hasta 0 en los últimos 10 días
        opacity = days_remaining / days_before_opacity;
    } else if (days_remaining < 0) {
        // Después de la fecha de vencimiento, la opacidad es 0 (completamente opaco)
        opacity = 0;
    }

    document.getElementsByTagName("BODY")[0].style.opacity = opacity;
})();
