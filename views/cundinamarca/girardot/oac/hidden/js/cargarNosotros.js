function cargarNosotros() {
    var nosotrosSpreadsheetId = RosaBlanca; // Usar el ID de la hoja de cálculo
    var nosotrosRange = "NOSOTROS!A2:E20"; // Rango extendido para los cuatro directivos

    var nosotrosUrl = `https://docs.google.com/spreadsheets/d/${nosotrosSpreadsheetId}/gviz/tq?tqx=out:json&tq&gid=0&range=${nosotrosRange}`;

    fetch(nosotrosUrl)
        .then((response) => response.text())
        .then((data) => {
            var jsonData = JSON.parse(data.substring(47, data.length - 2)).table.rows;

            // Iterar sobre cada fila para cada directivo
            for (var i = 0; i < jsonData.length; i++) {
                var rowData = jsonData[i].c;

                // Mapear los datos de cada directivo
                var fotoCargo = rowData[0] ? rowData[0].v : "";
                var nombre = rowData[1] ? rowData[1].v : "";
                var cargo = rowData[2] ? rowData[2].v : "";
                var telefono = rowData[3] ? rowData[3].v : "";
                var correo = rowData[4] ? rowData[4].v : "";

                // Actualizar el DOM con los datos del directivo
                switch (i) {
                    case 0:
                        // Presidente
                        document.getElementById("presidenteFoto").src = fotoCargo;
                        document.getElementById("presidenteNombre").innerText = nombre;
                        document.getElementById("presidenteCargo").innerText = cargo;
                        document.getElementById("presidenteTelefono").innerText = telefono;
                        document.getElementById("presidenteCorreo").innerText = correo;
                        break;
                    case 1:
                        // Vicepresidente
                        document.getElementById("vicepresidenteFoto").src = fotoCargo;
                        document.getElementById("vicepresidenteNombre").innerText = nombre;
                        document.getElementById("vicepresidenteCargo").innerText = cargo;
                        document.getElementById("vicepresidenteTelefono").innerText = telefono;
                        document.getElementById("vicepresidenteCorreo").innerText = correo;
                        break;
                    case 2:
                        // Tesorero
                        document.getElementById("tesoreroFoto").src = fotoCargo;
                        document.getElementById("tesoreroNombre").innerText = nombre;
                        document.getElementById("tesoreroCargo").innerText = cargo;
                        document.getElementById("tesoreroTelefono").innerText = telefono;
                        document.getElementById("tesoreroCorreo").innerText = correo;
                        break;
                    case 3:
                        // Secretario
                        document.getElementById("secretarioFoto").src = fotoCargo;
                        document.getElementById("secretarioNombre").innerText = nombre;
                        document.getElementById("secretarioCargo").innerText = cargo;
                        document.getElementById("secretarioTelefono").innerText = telefono;
                        document.getElementById("secretarioCorreo").innerText = correo;
                        break;
                    case 4:
                        // Fiscal1
                        document.getElementById("fiscal1Foto").src = fotoCargo;
                        document.getElementById("fiscal1Nombre").innerText = nombre;
                        document.getElementById("fiscal1Cargo").innerText = cargo;
                        document.getElementById("fiscal1Telefono").innerText = telefono;
                        document.getElementById("fiscal1Correo").innerText = correo;
                        break;
                    case 5:
                        // Fiscal2
                        document.getElementById("fiscal2Foto").src = fotoCargo;
                        document.getElementById("fiscal2Nombre").innerText = nombre;
                        document.getElementById("fiscal2Cargo").innerText = cargo;
                        document.getElementById("fiscal2Telefono").innerText = telefono;
                        document.getElementById("fiscal2Correo").innerText = correo;
                        break;
                    case 6:
                        // Delegado1
                        document.getElementById("delegado1Foto").src = fotoCargo;
                        document.getElementById("delegado1Nombre").innerText = nombre;
                        document.getElementById("delegado1Cargo").innerText = cargo;
                        document.getElementById("delegado1Telefono").innerText = telefono;
                        document.getElementById("delegado1Correo").innerText = correo;
                        break;
                    case 7:
                        // Delegado2
                        document.getElementById("delegado2Foto").src = fotoCargo;
                        document.getElementById("delegado2Nombre").innerText = nombre;
                        document.getElementById("delegado2Cargo").innerText = cargo;
                        document.getElementById("delegado2Telefono").innerText = telefono;
                        document.getElementById("delegado2Correo").innerText = correo;
                        break;
                    case 8:
                        // Delegado3
                        document.getElementById("delegado3Foto").src = fotoCargo;
                        document.getElementById("delegado3Nombre").innerText = nombre;
                        document.getElementById("delegado3Cargo").innerText = cargo;
                        document.getElementById("delegado3Telefono").innerText = telefono;
                        document.getElementById("delegado3Correo").innerText = correo;
                        break;
                    case 9:
                        // Delegado4
                        document.getElementById("delegado4Foto").src = fotoCargo;
                        document.getElementById("delegado4Nombre").innerText = nombre;
                        document.getElementById("delegado4Cargo").innerText = cargo;
                        document.getElementById("delegado4Telefono").innerText = telefono;
                        document.getElementById("delegado4Correo").innerText = correo;
                        break;
                    case 10:
                        // Delegado5
                        document.getElementById("delegado5Foto").src = fotoCargo;
                        document.getElementById("delegado5Nombre").innerText = nombre;
                        document.getElementById("delegado5Cargo").innerText = cargo;
                        document.getElementById("delegado5Telefono").innerText = telefono;
                        document.getElementById("delegado5Correo").innerText = correo;
                        break;
                    case 11:
                        // Delegado6
                        document.getElementById("delegado6Foto").src = fotoCargo;
                        document.getElementById("delegado6Nombre").innerText = nombre;
                        document.getElementById("delegado6Cargo").innerText = cargo;
                        document.getElementById("delegado6Telefono").innerText = telefono;
                        document.getElementById("delegado6Correo").innerText = correo;
                        break;
                    case 12:
                        // Convivencia1
                        document.getElementById("convivencia1Foto").src = fotoCargo;
                        document.getElementById("convivencia1Nombre").innerText = nombre;
                        document.getElementById("convivencia1Cargo").innerText = cargo;
                        document.getElementById("convivencia1Telefono").innerText = telefono;
                        document.getElementById("convivencia1Correo").innerText = correo;
                        break;
                    case 13:
                        // Convivencia2
                        document.getElementById("convivencia2Foto").src = fotoCargo;
                        document.getElementById("convivencia2Nombre").innerText = nombre;
                        document.getElementById("convivencia2Cargo").innerText = cargo;
                        document.getElementById("convivencia2Telefono").innerText = telefono;
                        document.getElementById("convivencia2Correo").innerText = correo;
                        break;
                    case 14:
                        // Convivencia3
                        document.getElementById("convivencia3Foto").src = fotoCargo;
                        document.getElementById("convivencia3Nombre").innerText = nombre;
                        document.getElementById("convivencia3Cargo").innerText = cargo;
                        document.getElementById("convivencia3Telefono").innerText = telefono;
                        document.getElementById("convivencia3Correo").innerText = correo;
                        break;
                    case 15:
                        // Comision1
                        document.getElementById("comision1Foto").src = fotoCargo;
                        document.getElementById("comision1Nombre").innerText = nombre;
                        document.getElementById("comision1Cargo").innerText = cargo;
                        document.getElementById("comision1Telefono").innerText = telefono;
                        document.getElementById("comision1Correo").innerText = correo;
                        break;
                    case 16:
                        // Comision2
                        document.getElementById("comision2Foto").src = fotoCargo;
                        document.getElementById("comision2Nombre").innerText = nombre;
                        document.getElementById("comision2Cargo").innerText = cargo;
                        document.getElementById("comision2Telefono").innerText = telefono;
                        document.getElementById("comision2Correo").innerText = correo;
                        break;
                    case 17:
                        // Comision3
                        document.getElementById("comision3Foto").src = fotoCargo;
                        document.getElementById("comision3Nombre").innerText = nombre;
                        document.getElementById("comision3Cargo").innerText = cargo;
                        document.getElementById("comision3Telefono").innerText = telefono;
                        document.getElementById("comision3Correo").innerText = correo;
                        break;
                    case 18:
                        // Comision4
                        document.getElementById("comision4Foto").src = fotoCargo;
                        document.getElementById("comision4Nombre").innerText = nombre;
                        document.getElementById("comision4Cargo").innerText = cargo;
                        document.getElementById("comision4Telefono").innerText = telefono;
                        document.getElementById("comision4Correo").innerText = correo;
                        break;
                }
            }
        })
        .catch((error) => {
            console.error(
                "Error al obtener los datos del encabezado desde Google Sheets: " +
                error
            );
        });
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarNosotros);
