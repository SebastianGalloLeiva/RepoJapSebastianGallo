let user = localStorage.getItem("email");
profile = JSON.parse(localStorage.getItem(`profile_${user}`))


function showProfile(){

}


document.getElementById("guardar-cambio").addEventListener("click", function () {
    setProfile()
})


document.addEventListener("DOMContentLoaded", function(){
    if (!user) {
        window.location = "index.html"
    } 
    //carga los valores del perfil si el usuario existe
    if (profile){
        
        document.getElementById("primer-nombre").value = profile.primerNombre
        document.getElementById("segundo-nombre").value = profile.segundoNombre
        document.getElementById("primer-apellido").value = profile.primerApellido
        document.getElementById("segundo-apellido").value = profile.segundoApellido
        document.getElementById("telefono-de-contacto").value = profile.telefonoContacto

    }
    document.getElementById("user-email").value = user
    
})

//funcion llamada una vez que el boton de guardar es apretado.
//toma los value de los input field para generar el perfil del usuario y lo guarda en el local con el perfil+username

function setProfile (){
    profile = {
        primerNombre: document.getElementById("primer-nombre").value,
        segundoNombre: document.getElementById("segundo-nombre").value,
        primerApellido: document.getElementById("primer-apellido").value,
        segundoApellido: document.getElementById("segundo-apellido").value,
        email: document.getElementById("user-email").value,
        telefonoContacto: document.getElementById("telefono-de-contacto").value,
    }
    
    localStorage.setItem(`profile_${user}`, JSON.stringify(profile))
}


//para el desafio, una escucha de evento para cuando cambia el fileinput.
document.querySelector("#myFileInput").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem(`${user}_Picture`, reader.result);
    })

    reader.readAsDataURL(this.files[0])

})

//Si hay una imagen de perfil para el usuario que esta logeado, carga la imagen en el lugar donde va la foto de perfil

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem(`${user}_Picture`);

    if (recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }

})