document.getElementById("boton-ingreso").addEventListener("click", function(){
    let userEmail = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    let seCumple = true;
    if (userEmail =="") {
        seCumple = false;
        alert("Ingresar usuario");
    }
    if (password ==""){
        seCumple = false;
        alert("Ingresar contraseña");
    }
    if (seCumple) {
        window.location = "portada.html"
    }
}); 



