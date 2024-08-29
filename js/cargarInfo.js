function cargarInfo() {
    // Importando la variable Oac desde cargarSheetOac.js
    var headerSpreadsheetId = '1dbd-zczXkVDbnGTVZ9a7NBwB3I7XnP9FXZORNJ1nSwY'; // Usar el ID de Asojuntas
    var headerRange = 'INFO!A2:V2'; // Suponiendo que tus datos están en la fila 2 de "INFO"

    var headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            var jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            var logoOac = jsonData[0] ? jsonData[0].v : 'logoOac';
            var titulo = jsonData[3] ? jsonData[3].v : 'titulo';
            var nit = jsonData[4] ? jsonData[4].v : 'nit';
            var ruc = jsonData[5] ? jsonData[5].v : 'ruc';
            var pj = jsonData[6] ? jsonData[6].v : 'pj';
            var fechaPJ = jsonData[7] ? jsonData[7].v : 'fechaPJ';
            var expedidoPor = jsonData[8] ? jsonData[8].v : 'expedidoPor';
            var ciudad = jsonData[9] ? jsonData[9].v : 'ciudad';
            var departamento = jsonData[10] ? jsonData[10].v : 'departamento';
            var logoComunal = jsonData[11] ? jsonData[11].v : 'logoComunal';
            var direccion = jsonData[12] ? jsonData[12].v : 'direccion';
            var barrio = jsonData[13] ? jsonData[13].v : 'barrio';
            var correo = jsonData[14] ? jsonData[14].v : 'correo';
            var telefono = jsonData[15] ? jsonData[15].v : 'telefono';
            var periodo = jsonData[16] ? jsonData[16].v : 'periodo';
            var creador = jsonData[17] ? jsonData[17].v : 'creador';
            var escudoPais = jsonData[18] ? jsonData[18].v : 'escudoPais';
            var escudoDepto = jsonData[19] ? jsonData[19].v : 'escudoDepto';
            var escudoMunicipio = jsonData[20] ? jsonData[20].v : 'escudoMunicipio';
            var logoIvc = jsonData[21] ? jsonData[21].v : 'logoIvc';

            // Convertir fechaPJ en un objeto Date y luego formatear la fecha
            if (typeof fechaPJ === 'string' && fechaPJ.startsWith('Date(')) {
                const [year, month, day] = fechaPJ.match(/\d+/g).map(Number);
                const date = new Date(year, month, day);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                fechaPJ = date.toLocaleDateString('es-ES', options);
            }

            // Actualizar el DOM con los datos
            document.getElementById('header-logoOac').src = logoOac;
            document.getElementById('header-titulo').innerText = titulo;
            document.getElementById('header-titulo1').innerText = titulo;
            document.getElementById('header-nit').innerText = 'NIT: ' + nit;
            document.getElementById('header-ruc').innerText = 'RUC: ' + ruc;
            document.getElementById('header-pj').innerText = 'PJ: ' + pj + ' del ' + fechaPJ;
            document.getElementById('header-expedido').innerText = 'Expedido por: ' + expedidoPor;
            document.getElementById('header-ubicacion').innerText = ciudad + ', ' + departamento;
            document.getElementById('header-logoComunal').src = logoComunal;
            document.getElementById('footer-direccion').innerText = ' Dirección: ' + direccion;
            document.getElementById('footer-barrio').innerText = ' Barrio: ' + barrio;
            document.getElementById('footer-correo').innerText = ' Correo: ' + correo;
            document.getElementById('footer-telefono').innerText = ' WhatsApp: ' + telefono;
            document.getElementById('footer-periodo').innerText = ' Periodo Comunal: ' + periodo;
            document.getElementById('footer-creador').innerText = creador;
            document.getElementById('footer-escudoPais').src = escudoPais;
            document.getElementById('footer-escudoDepto').src = escudoDepto;
            document.getElementById('footer-escudoMunicipio').src = escudoMunicipio;
            document.getElementById('footer-logoIvc').src = logoIvc;
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarInfo);
