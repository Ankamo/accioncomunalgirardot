function cargarMapa() {
    const mapaSpreadsheetId = RosaBlanca; // Reemplazar con el ID real de Asojuntas
    const mapaRange = 'UBICACION!A1:B26';

    const mapaUrl = `https://docs.google.com/spreadsheets/d/${mapaSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${mapaRange}`;

    fetch(mapaUrl)
        .then(response => response.text())
        .then(data => {
            const jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            const puntos = jsonData.map((row, index) => {
                return row.c[0] ? row.c[0].v : `punto${index + 1}`;
            });

            // Actualizar el DOM con los datos
            puntos.forEach((punto, index) => {
                const puntoId = `punto${index + 1}`;
                const puntoElement = document.getElementById(puntoId);
                if (puntoElement) {
                    puntoElement.innerText = punto;
                } else {
                    console.warn(`Elemento con id '${puntoId}' no encontrado.`);
                }
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets:', error);
        });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarMapa);
