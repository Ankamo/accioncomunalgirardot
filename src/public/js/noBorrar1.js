function cargarFooter() {
    var footerSpreadsheetId = '1NfrkLpTyRUlLIQlrJEsSIVw_Q3_h4nqR1jpIM22N-jo';
    var footerRange = 'INFORMACION!M:V'; // Actualizamos el rango para incluir todos los encabezados del encabezado

    var footerUrl = `https://docs.google.com/spreadsheets/d/${footerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${footerRange}`;

    fetch(footerUrl)
        .then(response => response.text())
        .then(data => {
            var rowData = JSON.parse(data.substring(47, data.length - 2)).table.rows[1].c;
            var direccion = rowData[12].v;
            var barrio = rowData[13].v; // Valor de la celda B2
            var correoElectronico = rowData[14].v; // Valor de la celda B2
            var contacto = rowData[15].v; // Valor de la celda B2
            var periodoComunal = rowData[16].v; // Valor de la celda C2
            var derechos = rowData[17].v; // Valor de la celda D2
            var logo3 = rowData[18].v; // Valor de la celda D2
            var logo4= rowData[19].v; // Valor de la celda D2
            var logo5 = rowData[20].v; // Valor de la celda D2
            var logo6 = rowData[21].v; // Valor de la celda D2

            // Inserta los datos en los elementos correspondientes del encabezado

            document.getElementById('direccion').innerText = direccion;
            document.getElementById('barrio').innerText = barrio;
            document.getElementById('correoElectronico').correoElectronico = "Correo Electrónico: " + correoElectronico;
            document.getElementById('contacto').innerText = "Contacto Telefónico: " + contacto;
            document.getElementById('periodoComunal').innerText = "Periodo Comunal: " + periodoComunal;
            document.getElementById('derechos').innerText = derechos;
            document.getElementById('logo3').src = logo3;
            document.getElementById('logo4').src = logo4;
            document.getElementById('logo5').src = logo5;
            document.getElementById('logo6').src = logo6;
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}






function cargarHeader() {
    var headerSpreadsheetId = '1NfrkLpTyRUlLIQlrJEsSIVw_Q3_h4nqR1jpIM22N-jo';
    var headerRange = 'HEADER!2:L2'; // Actualizamos el rango para incluir todos los encabezados del encabezado

    var headerUrl = `https://docs.google.com/spreadsheets/d/${headerSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${headerRange}`;

    fetch(headerUrl)
        .then(response => response.text())
        .then(data => {
            var rowData = JSON.parse(data.substring(47, data.length - 2)).table.rows[1].c;
            //var logo1 = rowData[0].v;
            //var titulo = rowData[3].v;
            //var nit = rowData[4].v;
            //var ruc = rowData[5].v;
            //var personeriaJuridica = rowData[6].v;
            //var fechaPersoneria = rowData[7].v;
            //var expedido = rowData[8].v;
            var ciudad = rowData[9].v;
            //var departamento = rowData[10].v;
            //var logo2 = rowData[11].v;

            // Inserta los datos en los elementos correspondientes del encabezado
            
            //document.getElementById('logo1').src = logo1;
            //document.getElementById('titulo').innerText = titulo;
            //document.getElementById('titulo1').innerText = titulo;
            //document.getElementById('nit').innerText = nit;
            //document.getElementById('ruc').innerText = ruc;
            //document.getElementById('personeriaJuridica').innerText = "Personería Jurídica: " + personeriaJuridica + " Del " + fechaPersoneria;
            //document.getElementById('expedido').innerText = "Expedido por: " + expedido;
            //document.getElementById('ubicacion').innerText = ciudad + " - " + departamento;
            //document.getElementById('logo2').src = logo2;   
        })
        .catch(error => {
            console.error('Error al obtener los datos del encabezado desde Google Sheets: ' + error);
        });
}