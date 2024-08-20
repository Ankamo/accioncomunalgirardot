function cargarHeader() {
    var headerSpreadsheetId = '1NfrkLpTyRUlLIQlrJEsSIVw_Q3_h4nqR1jpIM22N-jo';
    var headerRange = 'HEADER!A:L'; // Actualizamos el rango para incluir todos los encabezados del encabezado

    var headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            var rowData = JSON.parse(data.substring(47, data.length - 2)).table.rows[1].c;
            var titulo = rowData[3].v;

            // Inserta los datos en los elementos correspondientes del encabezado
            document.getElementById('titulo').src = titulo;
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}

