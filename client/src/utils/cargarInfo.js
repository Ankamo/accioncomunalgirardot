// src/utils/cargarInfo.js

export const cargarInfo = () => {
    const headerSpreadsheetId = '1dJRtbDiIJFAbaMEw50kjdSHOO84kWZt-wXLZow_ILWo'; // Usar el ID de Asojuntas
    const headerRange = 'INFO!A2:V2'; // Suponiendo que tus datos están en la fila 2 de "INFO"

    const headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            const jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows[0].c;

            // Mapear los datos de la hoja de cálculo a las variables correspondientes
            let logoOac = jsonData[0]?.v || 'logoOac';
            let titulo = jsonData[3]?.v || 'titulo';
            let nit = jsonData[4]?.v || 'nit';
            let ruc = jsonData[5]?.v || 'ruc';
            let pj = jsonData[6]?.v || 'pj';
            let fechaPJ = jsonData[7]?.v || 'fechaPJ';
            let expedidoPor = jsonData[8]?.v || 'expedidoPor';
            let ciudad = jsonData[9]?.v || 'ciudad';
            let departamento = jsonData[10]?.v || 'departamento';
            let logoComunal = jsonData[11]?.v || 'logoComunal';
            let direccion = jsonData[12]?.v || 'direccion';
            let barrio = jsonData[13]?.v || 'barrio';
            let correo = jsonData[14]?.v || 'correo';
            let telefono = jsonData[15]?.v || 'telefono';
            let periodo = jsonData[16]?.v || 'periodo';
            let creador = jsonData[17]?.v || 'creador';
            let escudoPais = jsonData[18]?.v || 'escudoPais';
            let escudoDepto = jsonData[19]?.v || 'escudoDepto';
            let escudoMunicipio = jsonData[20]?.v || 'escudoMunicipio';
            let logoIvc = jsonData[21]?.v || 'logoIvc';

            // Convertir fechaPJ en un objeto Date y luego formatear la fecha
            if (typeof fechaPJ === 'string' && fechaPJ.startsWith('Date(')) {
                const [year, month, day] = fechaPJ.match(/\d+/g).map(Number);
                const date = new Date(year, month - 1, day); // Corregido: month - 1
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                fechaPJ = date.toLocaleDateString('es-ES', options);
            }

            // Devuelve un objeto con los datos actualizados
            return {
                logoOac,
                titulo,
                nit,
                ruc,
                pj,
                fechaPJ,
                expedidoPor,
                ciudad,
                departamento,
                logoComunal,
                direccion,
                barrio,
                correo,
                telefono,
                periodo,
                creador,
                escudoPais,
                escudoDepto,
                escudoMunicipio,
                logoIvc
            };
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
            // Devuelve un objeto con valores por defecto en caso de error
            return {
                logoOac: 'logoOac',
                titulo: 'titulo',
                nit: 'nit',
                ruc: 'ruc',
                pj: 'pj',
                fechaPJ: 'fechaPJ',
                expedidoPor: 'expedidoPor',
                ciudad: 'ciudad',
                departamento: 'departamento',
                logoComunal: 'logoComunal',
                direccion: 'direccion',
                barrio: 'barrio',
                correo: 'correo',
                telefono: 'telefono',
                periodo: 'periodo',
                creador: 'creador',
                escudoPais: 'escudoPais',
                escudoDepto: 'escudoDepto',
                escudoMunicipio: 'escudoMunicipio',
                logoIvc: 'logoIvc'
            };
        });
};
