export const updateOpacity = () => {
    /* Configuración */
    const dueDate = new Date('2024-09-30'); // Fecha de vencimiento
    const daysBeforeOpacity = 10; // Días antes de la fecha de vencimiento para comenzar a opacar
    /* Fin de la configuración */

    const currentDate = new Date();
    const utcDueDate = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
    const utcCurrentDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    // Calcular los días restantes hasta la fecha de vencimiento
    const daysRemaining = Math.floor((utcDueDate - utcCurrentDate) / (1000 * 60 * 60 * 24));

    // Inicializar opacidad
    let opacity = 1;

    if (daysRemaining <= daysBeforeOpacity && daysRemaining >= 0) {
        // Calcular opacidad linealmente desde 1 hasta 0 en los últimos 10 días
        opacity = daysRemaining / daysBeforeOpacity;
    } else if (daysRemaining < 0) {
        // Después de la fecha de vencimiento, la opacidad es 0 (completamente opaco)
        opacity = 0;
    }

    document.body.style.opacity = opacity;
};
