//************************************************************/
// OBTENIDO DE: https://gist.github.com/rotvulpix/69a24cc199a4253d058c
function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.', '');
    // Despejar Guión
    valor = valor.replace('-', '');

    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0, -1);
    dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut.value = cuerpo + '-' + dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
        rut.setCustomValidity("RUT Incompleto");
        alert("RUT Inválido");
        return false;
    }

    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;

    // Para cada dígito del Cuerpo
    for (i = 1; i <= cuerpo.length; i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv == 'K') ? 10 : dv;
    dv = (dv == 0) ? 11 : dv;

    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado != dv) {
        rut.setCustomValidity("RUT Inválido");
        alert("RUT Inválido");
        return false;
    }

    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}
//************************************************************/

//************************************************************/
// EJEMPLO OBTENIDO DE: http://myapa.es/code-snippets/selets-dependientes-javascript/
$(document).ready(function() {
    // Consigue el elemento provincias/poblaciones por su identificador id. Es un método del DOM de HTML
    var id1 = document.getElementById("pais_id");
    var id2 = document.getElementById("region_id");

    // Añade un evento change al elemento id1, asociado a la función cambiar()
    if (id1.addEventListener) { // Para la mayoría de los navegadores, excepto IE 8 y anteriores
        id1.addEventListener("change", cambiar);
    } else if (id1.attachEvent) { // Para IE 8 y anteriores
        id1.attachEvent("change", cambiar); // attachEvent() es el método equivalente a addEventListener()
    }

    // Definición de la función cambiar()
    function cambiar() {
        for (var i = 0; i < id2.options.length; i++)

        // -- Inicio del comentario -- 
        // Muestra solamente los id2 que sean iguales a los id1 seleccionados, según la propiedad display
            if (id2.options[i].getAttribute("codigo") == id1.options[id1.selectedIndex].getAttribute("codigo")) {
                id2.options[i].style.display = "block";
            } else {
                id2.options[i].style.display = "none";
            }
            // -- Fin del comentario --

        id2.value = "";
    }

    // Llamada a la función cambiar()
    cambiar();
});

$(document).ready(function() {
    // Consigue el elemento provincias/poblaciones por su identificador id. Es un método del DOM de HTML
    var id2 = document.getElementById("region_id");
    var id3 = document.getElementById("comuna_id");

    // Añade un evento change al elemento id1, asociado a la función cambiar()
    if (id2.addEventListener) { // Para la mayoría de los navegadores, excepto IE 8 y anteriores
        id2.addEventListener("change", cambiar);
    } else if (id2.attachEvent) { // Para IE 8 y anteriores
        id2.attachEvent("change", cambiar); // attachEvent() es el método equivalente a addEventListener()
    }

    // Definición de la función cambiar()
    function cambiar() {
        for (var i = 0; i < id3.options.length; i++)

        // -- Inicio del comentario -- 
        // Muestra solamente los id2 que sean iguales a los id1 seleccionados, según la propiedad display
            if (id3.options[i].getAttribute("codigo2") == id2.options[id2.selectedIndex].getAttribute("codigo2")) {
                id3.options[i].style.display = "block";
            } else {
                id3.options[i].style.display = "none";
            }
            // -- Fin del comentario --

        id3.value = "";
    }

    // Llamada a la función cambiar()
    cambiar();
});
//************************************************************/


function enviar() {
    var id1 = document.getElementById("nombre_id").value;
    var id2 = document.getElementById("apellido_id").value;
    var id3 = document.getElementById("rut_id").value;
    var id4 = document.getElementById("pais_id").selectedIndex;
    var id5 = document.getElementById("region_id").selectedIndex;
    var id6 = document.getElementById("comuna_id").selectedIndex;
    var id7 = document.getElementById("direccion_id").value;
    var id8 = document.getElementById("movil_id").value;
    var id9 = document.getElementById("mail_id").value;

    if (id1 == '' || id2 == '' || id3 == '' || id4 == '' ||
        id5 == '' || id6 == '' || id7 == '' || id8 == '' || id9 == '') {
        alert("Complete todos los datos");
    } else {
        alert("Datos enviados correctamente");
    }

}