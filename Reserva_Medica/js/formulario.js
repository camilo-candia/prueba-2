// Implementar formulario
const boton = document.getElementById("submit");
const contenedorErrores = document.getElementById("errores");


boton.addEventListener("click", () => {

    contenedorErrores.innerHTML = "";

    const nombre = document.getElementById("nombre").value();
    const edad = document.getElementById("edad").value();
    const fecha = document.getElementById("fecha").value();
    const hora = document.getElementById("hora").value();
    const motivo = document.getElementById("motivo").value();

    let errores = [];

    if (nombre === "") {
        errores.push("Debes ingresar el nombre");
    }

    if (edad === "") {
        errores.push("Debes ingresar la edad");
    }

    if (fecha === "") {
        errores.push("Debes ingresar la fecha");
    }

    if (hora === "") {
        errores.push("Debes ingresar la hora");
    }

    if (motivo === "") {
        errores.push("Debes ingresar el motivo");
    }

    if(errores.length > 0){

        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>

        `;

        return;
    }

    
});