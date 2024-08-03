function cargarFooter() {
    var footerSpreadsheetId = jacRosablanca; // Usar el ID de Asojuntas
    var footerRange = 'FOOTER!A2:F2'; // Asegúrate de que la hoja y el rango sean correctos

    var footerUrl = `https://docs.google.com/spreadsheets/d/${footerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${footerRange}`;

    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            var jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            var direccion = jsonData[0] ? jsonData[0].v : 'Dirección no disponible';
            var barrio = jsonData[1] ? jsonData[1].v : 'Barrio no disponible';
            var correo = jsonData[2] ? jsonData[2].v : 'Correo no disponible';
            var telefono = jsonData[3] ? jsonData[3].v : 'Teléfono no disponible';
            var periodo = jsonData[4] ? jsonData[4].v : 'Periodo no disponible';

            // Actualizar el DOM con los datos
            document.getElementById('footer-salon').innerText = direccion;
            document.getElementById('footer-barrio').innerText = barrio;
            document.getElementById('footer-correo').innerText = correo;
            document.getElementById('footer-telefono').innerText = telefono;
            document.getElementById('footer-periodo').innerText = periodo;
        })
        .catch(error => {
            console.error('Error al obtener los datos del pie de página desde Google Sheets: ' + error);
        });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarFooter);
