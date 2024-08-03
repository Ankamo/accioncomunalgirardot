function cargarCartelera() {
    var headerSpreadsheetId = RosaBlanca; // Usar el ID de Asojuntas
    var headerRange = 'CARTELERA!A2:H2'; // Suponiendo que tus datos están en la fila 2 de "INFO"

    var headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            var jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            var titulo = jsonData[0] ? jsonData[0].v : 'titulo';
            var fecha = jsonData[1] ? jsonData[1].v : 'fecha';
            var foto1 = jsonData[2] ? jsonData[2].v : 'foto1';
            var foto2 = jsonData[3] ? jsonData[3].v : 'foto2';
            var foto3 = jsonData[4] ? jsonData[4].v : 'foto3';
            var foto4 = jsonData[5] ? jsonData[5].v : 'foto4';
            var foto5 = jsonData[6] ? jsonData[6].v : 'foto5';
            var descripcion = jsonData[7] ? jsonData[7].v : 'descripcion';


            // Convertir fechaPJ en un objeto Date y luego formatear la fecha
            if (typeof fecha === 'string' && fecha.startsWith('Date(')) {
                const [year, month, day] = fecha.match(/\d+/g).map(Number);
                const date = new Date(year, month, day);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                fecha = date.toLocaleDateString('es-ES', options);
            }

            // Actualizar el DOM con los datos
            document.getElementById('cartelera-titulo').innerText = titulo;
            document.getElementById('cartelera-titulo1').innerText = titulo;
            document.getElementById('cartelera-fecha').innerText = fecha;
            document.getElementById('cartelera-foto1').src = foto1;
            document.getElementById('cartelera-foto2').src = foto2;
            document.getElementById('cartelera-foto3').src = foto3;
            document.getElementById('cartelera-foto4').src = foto4;
            document.getElementById('cartelera-foto5').src = foto5;
            document.getElementById('cartelera-descripcion').src = descripcion;
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarCartelera);
