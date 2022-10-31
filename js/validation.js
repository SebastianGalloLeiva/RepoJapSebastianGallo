let enviosPremium = document.getElementById("envio-premium");
let enviosExpress = document.getElementById("envio-express")
let enviosStandard = document.getElementById("envio-standard")
let tarjetadecredito = document.getElementById("tarjeta-credito")
let transferenciaBancaria = document.getElementById("transferencia-bancaria")
let botondepagar = document.getElementById("pay-button");

let mensajedenopago = document.getElementById("pay-message");


function checkPayment() {
    if (tarjetadecredito.checkValidity() || transferenciaBancaria.checkValidity()) {
      botondepagar.classList.remove("text-danger");
      mensajedenopago.classList.add("d-none");
    }else {
      botondepagar.classList.add("text-danger");
      mensajedenopago.classList.remove("d-none");
    }
  }



document.getElementById("button").addEventListener("click", function () {
    'use strict'
    checkPayment()
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
              document.getElementById("cart").innerHTML += `
            <div class="alert alert-success" role="alert">
           Has comprado con exito!
          </div>`
          event.preventDefault()
          event.stopPropagation()
        
          }
            
          form.classList.add('was-validated')
        }, false)
      })})

tarjetadecredito.addEventListener("change", function(){
    checkPayment();
})

transferenciaBancaria.addEventListener("change", function(){
    checkPayment()
})