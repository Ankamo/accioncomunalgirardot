function cargarInfo() {
    const headerSpreadsheetId = '1dbd-zczXkVDbnGTVZ9a7NBwB3I7XnP9FXZORNJ1nSwY'; // ID de la hoja de cálculo
    const headerRange = 'INFO!A2:V2';
    const headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            const jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;
            
            // Mapeo de datos con nombres descriptivos
            const fields = {
                logoOac: 'header-logoOac',
                titulo: 'header-titulo',
                nit: 'header-nit',
                ruc: 'header-ruc',
                pj: 'header-pj',
                fechaPJ: 'header-fechaPJ',
                expedidoPor: 'header-expedido',
                ciudad: 'header-ubicacion',
                departamento: 'header-departamento',
                logoComunal: 'header-logoComunal',
                direccion: 'footer-direccion',
                barrio: 'footer-barrio',
                correo: 'footer-correo',
                telefono: 'footer-telefono',
                periodo: 'footer-periodo',
                creador: 'footer-creador',
                escudoPais: 'footer-escudoPais',
                escudoDepto: 'footer-escudoDepto',
                escudoMunicipio: 'footer-escudoMunicipio',
                logoIvc: 'footer-logoIvc'
            };

            // Procesar y asignar los datos al DOM
            Object.keys(fields).forEach((key, index) => {
                const element = document.getElementById(fields[key]);
                if (element) {
                    if (key.includes('logo') || key.includes('escudo')) {
                        element.src = jsonData[index] ? jsonData[index].v : '';
                    } else {
                        element.innerText = jsonData[index] ? jsonData[index].v : '';
                    }
                }
            });

            // Convertir y formatear la fecha PJ
            const fechaPJ = jsonData[7] ? jsonData[7].v : '';
            if (typeof fechaPJ === 'string' && fechaPJ.startsWith('Date(')) {
                const [year, month, day] = fechaPJ.match(/\d+/g).map(Number);
                const date = new Date(year, month, day);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = date.toLocaleDateString('es-ES', options);
                document.getElementById('header-pj').innerText += ` del ${formattedDate}`;
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos desde Google Sheets:', error);
            alert('No se pudieron cargar los datos del encabezado. Por favor, inténtelo más tarde.');
        });
}

document.addEventListener('DOMContentLoaded', cargarInfo);
