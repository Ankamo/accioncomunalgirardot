(function() {
    const dueDate = new Date('2024-09-30'); // Fecha límite de pago
    const daysDeadline = 60; // Días antes de que el pago sea considerado atrasado

    const currentDate = new Date();
    const timeDifference = currentDate - dueDate;
    const daysLate = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const daysRemaining = daysDeadline - daysLate;
    
    // Calcular opacidad basada en los días de atraso
    let opacity = daysRemaining / daysDeadline;
    opacity = Math.max(0, Math.min(1, opacity)); // Asegurarse que esté entre 0 y 1

    if (daysLate > 0) {
        document.body.style.opacity = opacity;
    }
})();
