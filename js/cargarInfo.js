function cargarInfo() {
    // Importando la variable Oac desde cargarSheetOac.js
    var headerSpreadsheetId = '1dJRtbDiIJFAbaMEw50kjdSHOO84kWZt-wXLZow_ILWo'; // Usar el ID de Asojuntas
    var headerRange = 'INFO!A2:V2'; // Suponiendo que tus datos están en la fila 2 de "INFO"

    var headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            var jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            var logoOac = jsonData[0]?.v || 'logoOac';
            var titulo = jsonData[3]?.v || 'titulo';
            var nit = jsonData[4]?.v || 'nit';
            var ruc = jsonData[5]?.v || 'ruc';
            var pj = jsonData[6]?.v || 'pj';
            var fechaPJ = jsonData[7]?.v || 'fechaPJ';
            var expedidoPor = jsonData[8]?.v || 'expedidoPor';
            var ciudad = jsonData[9]?.v || 'ciudad';
            var departamento = jsonData[10]?.v || 'departamento';
            var logoComunal = jsonData[11]?.v || 'logoComunal';
            var direccion = jsonData[12]?.v || 'direccion';
            var barrio = jsonData[13]?.v || 'barrio';
            var correo = jsonData[14]?.v || 'correo';
            var telefono = jsonData[15]?.v || 'telefono';
            var periodo = jsonData[16]?.v || 'periodo';
            var creador = jsonData[17]?.v || 'creador';
            var escudoPais = jsonData[18]?.v || 'escudoPais';
            var escudoDepto = jsonData[19]?.v || 'escudoDepto';
            var escudoMunicipio = jsonData[20]?.v || 'escudoMunicipio';
            var logoIvc = jsonData[21]?.v || 'logoIvc';

            // Convertir fechaPJ en un objeto Date y luego formatear la fecha
            if (typeof fechaPJ === 'string' && fechaPJ.startsWith('Date(')) {
                const [year, month, day] = fechaPJ.match(/\d+/g).map(Number);
                const date = new Date(year, month - 1, day); // Corregido: month - 1
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                fechaPJ = date.toLocaleDateString('es-ES', options);
            }

            // Función auxiliar para actualizar el DOM de manera segura
            function setElementTextById(id, text) {
                const element = document.getElementById(id);
                if (element) {
                    element.innerText = text;
                }
            }

            function setElementSrcById(id, src) {
                const element = document.getElementById(id);
                if (element) {
                    element.src = src;
                }
            }

            // Actualizar el DOM con los datos
            setElementSrcById('header-logoOac', logoOac);
            setElementTextById('header-titulo', titulo);
            setElementTextById('header-titulo1', titulo);
            setElementTextById('header-nit', 'NIT: ' + nit);
            setElementTextById('header-ruc', 'RUC: ' + ruc);
            setElementTextById('header-pj', 'PJ: ' + pj + ' del ' + fechaPJ);
            setElementTextById('header-expedido', 'Expedido por: ' + expedidoPor);
            setElementTextById('header-ubicacion', ciudad + ', ' + departamento);
            setElementSrcById('header-logoComunal', logoComunal);
            setElementTextById('footer-direccion', 'Dirección: ' + direccion);
            setElementTextById('footer-barrio', 'Barrio: ' + barrio);
            setElementTextById('footer-correo', 'Correo: ' + correo);
            setElementTextById('footer-telefono', 'WhatsApp: ' + telefono);
            setElementTextById('footer-periodo', 'Periodo Comunal: ' + periodo);
            setElementTextById('footer-creador', creador);
            setElementSrcById('footer-escudoPais', escudoPais);
            setElementSrcById('footer-escudoDepto', escudoDepto);
            setElementSrcById('footer-escudoMunicipio', escudoMunicipio);
            setElementSrcById('footer-logoIvc', logoIvc);
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}

// Llama a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarInfo);
