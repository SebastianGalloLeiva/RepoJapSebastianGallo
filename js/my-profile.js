let user = localStorage.getItem("email");
profile = JSON.parse(localStorage.getItem(`profile_${user}`))


function showProfile(){

}


document.getElementById("guardar-cambio").addEventListener("click", function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()

          } else {
              setProfile()

          }
            
          form.classList.add('was-validated')
        }, false)
      })})

document.addEventListener("DOMContentLoaded", function(){
    if (!user) {
        window.location = "index.html"
    } 
    if (profile){
        
        document.getElementById("primer-nombre").value = profile.primerNombre
        document.getElementById("segundo-nombre").value = profile.segundoNombre
        document.getElementById("primer-apellido").value = profile.primerApellido
        document.getElementById("segundo-apellido").value = profile.segundoApellido
        document.getElementById("telefono-de-contacto").value = profile.telefonoContacto

    }
    document.getElementById("user-email").value = user
    
})


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


document.querySelector("#myFileInput").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem(`${user}_Picture`, reader.result);
    })

    reader.readAsDataURL(this.files[0])

})

document.addEventListener("DOMContentLoaded", () => {
    const recentImageDataUrl = localStorage.getItem(`${user}_Picture`);

    if (recentImageDataUrl){
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }

})