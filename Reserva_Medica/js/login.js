// Implementar login
const boton = document.getElementById("errores");
const contenedorErrores = document.getElementById("Errores");


boton.addEventListener("click", () => {

    
    
    const usuario = document.getElementById("usuario").value.trim();
    const contraseña = document.getElementById("password").value.trim();
    

    let errores = [];

    if (usuario === "") {
        errores.push("Debes ingresar el usuario");
    }

    if (contraseña === "") {
        errores.push("Debes ingresar la contraseña");
    }

    if(errores.length > 0){

        contenedorErrores.innerHTML = `
            <ul>
               ${errores.map(error => `<li>${error} </li>`).join("")} 
            </ul>

        `;

        return;
    }
})