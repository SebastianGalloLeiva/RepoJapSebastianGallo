// document.getElementById("boton-ingreso").addEventListener("click", function(){
//     let userEmail = document.getElementById("floatingInput").value;
//     let password = document.getElementById("floatingPassword").value;
//     let seCumple = true;
//     if (userEmail =="") {
//         seCumple = false;
//         //alert("Ingresar usuario");
//     }
//     if (password ==""){
//         seCumple = false;
//         //alert("Ingresar contraseña");
//     }
//     if (seCumple) {
//         window.location = "portada.html"
//         window.localStorage.setItem("email", userEmail);
//     }
// }); 
document.getElementById("boton-ingreso").addEventListener("click", function () {
    'use strict'
   // checkPayment()
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()

          }  else{
            let userEmail = document.getElementById("floatingInput").value;
            let password = document.getElementById("floatingPassword").value;
            let seCumple = true;
            if (userEmail =="") {
                seCumple = false;
                //alert("Ingresar usuario");
            }
            if (password ==""){
                seCumple = false;
                //alert("Ingresar contraseña");
            }
            if (seCumple) {
                window.location = "portada.html"
                window.localStorage.setItem("email", userEmail);
            }
          event.preventDefault()
          event.stopPropagation()
        
          }
            
          form.classList.add('was-validated')
        }, false)
      })})




