let user = localStorage.getItem("email");
let id = localStorage.getItem("prodID");
const envioPremium = 0.15
const envioExpress = 0.07
const envioStandard = 0.05
let subtotalDol = 0
let subtotalUyu = 0
let subtotalTotal = 0
let costoEnvio = 0
let porcentaje = 5
let total = 0
let envio = 0
let newCart = JSON.parse(localStorage.getItem(`cart_${user}`)) || {};

function setProdID(id) {
  localStorage.setItem("prodID", id);
  // let newCart = JSON.parse(localStorage.getItem(`cart_${user}`))
  newCart['producto' + id].count = cantidad
  localStorage.setItem(`cart_${user}`, JSON.stringify(newCart))
  showCurrentCart()

  window.location = "cart.html"
}
function eliminarArticulo(id){
  delete newCart['producto' + id]
  localStorage.setItem(`cart_${user}`, JSON.stringify(newCart))
  showCurrentCart()
  
}

function showCurrentCart() {
  

  if (Object.keys(newCart).length){
  let htmlContentToAppend = "";
  //let newCart = JSON.parse(localStorage.getItem(`cart_${user}`))
  htmlContentToAppend += `
        <div class="container col-md-8 m-auto mt-5">
       <h1 class="text-center">Carrito de compras</h1>
       <h4 class="mb-5 "> <b>Articulos a comprar:</b></h2>
         <div class="row align-items-start">
           <div class="d-none d-sm-block col-2">
           </div>
           <div class="col-2 d-none d-sm-block ">
             <p> <b>Nombre</b></p>
           </div>
           <div class="col-2 d-none d-sm-block">
             <p> <b>Costo</b></p>
           </div>
           <div class="col-2 d-none d-sm-block">
             <p> <b>Cantidad</b></p>
           </div>
           <div class="col-2 d-none d-sm-block">
             <p> <b>Subtotal</b></p>
           </div>
           <div class="col-2 d-none d-sm-block">
           </div>
         </div>
         <hr class="border-2">
         `

  for (const i in newCart) {
    const cart = newCart[i];
    subtotal = (cart.count * cart.cost)
    if (cart.moneda == "USD") {
      subtotalDol += subtotal

    }
    if (cart.moneda == "UYU") {
      subtotalUyu += subtotal

    }
    subtotalTotal = subtotalDol + subtotalUyu / 40
   
    if (cart.name != undefined && cart.count>0) {
      htmlContentToAppend += `
         <div class="row mb-3 align-items-start">
        <div class="d-none d-sm-block col">
            <img src="${cart.imagen}" class="imagen-carrito">
          </div>
          <div class="col-2">
            ${cart.name}
          </div>
          <div class="col-2">
           ${cart.moneda} ${cart.cost}
          </div>
          <div class="col-2">
            <div class="form-outline col-5 w-75" onclick="setProdID(${cart.productId})">
              <input type="number" id="typeNumber" class="form-control type-number" value="${cart.count}" />
            </div>
          </div>
          <div class="col-2">

          <b>${cart.moneda} ${subtotal}</b>
        
          </div>
          <div class="col-1">
          <button type="button" class="btn btn-outline-danger" onclick="eliminarArticulo(${cart.productId})"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
</svg>
              </button>
          </div>
          </div>
          <hr>
          `;

    }
  }
  document.getElementById("cart").innerHTML = htmlContentToAppend


  htmlContentToAppend = `
        <div class="container">
        <h3> Costos </h3>
        <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Subtotal</h4>                        
                        <p class="mb-1">USD ${subtotalTotal}</p>
                    </div>
                </div>
                <div class="row">
                <p>Costo unitario del producto por cantidad</p>
            </div>
            </div>
            <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Costo de envio</h4>                        
                        <p class="mb-1">USD ${Math.ceil(subtotalTotal * envioPremium)}</p>
                    </div>
                </div>
                <div class="row">
                <p>Segun el tipo de envio</p>
            </div>
            </div>
            <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Total($)</h4>                        
                        <p class="mb-1"><strong>USD ${subtotalTotal + Math.ceil(subtotalTotal * envioPremium)}</strong></p>
                    </div>
                </div>
                <div class="row">
                <p>Costo unitario del producto por cantidad</p>
            </div>
            </div>

            </div>`





  document.getElementById("envio").innerHTML = htmlContentToAppend;
}
  else {
    document.getElementById("cart").innerHTML = ""
    document.getElementById("alertResult").classList.add('alert-primary');
    let msgToShowHTML = document.getElementById("resultSpan")
  msgToShowHTML.innerHTML = `<div class="carrito-vacio text-center">
  <h1>¡Hay un carrito que llenar!</h1>
  <h4>Actualmente no tenés productos en tu carrito.</h4>
  <p>Buscá entre millones de productos</p>
  <a class="btn btn-primary col-auto justify-content-md-end" href="categories.html" role="button">Buscar productos</a>
  </div>
`
  document.getElementById("alertResult").classList.add("show");

  }
  
}

function cantidadProductoCarrito() {
  let numbers = document.getElementsByClassName("type-number")
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('change', function () {
      cantidad = numbers[i].value
    })
  }
};

function showCostoEnvio() {
  htmlContentToAppend = `
  <div class="container">
        <h3> Costos </h3>
        <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Subtotal</h4>                        
                        <p class="mb-1">USD ${subtotalTotal}</p>
                    </div>
                </div>
                <div class="row">
                <p>Costo unitario del producto por cantidad</p>
            </div>
            </div>
            <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Costo de envio</h4>                        
                        <p class="mb-1">USD ${envio}</p>
                    </div>
                </div>
                <div class="row">
                <p>Segun el tipo de envio</p>
            </div>
            </div>
            <div class="list-group-item ">
                <div class="row">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">Total($)</h4>                        
                        <p class="mb-1"><strong>USD ${subtotalTotal + envio}</strong></p>
                    </div>
                </div>
                <div class="row">
                <p>Costo unitario del producto por cantidad</p>
            </div>
            </div>

            </div>
        `



  document.getElementById("envio").innerHTML = htmlContentToAppend;

}
function tipoDeEnvio(tipo) {
  if (tipo === envioPremium) {
    document.getElementById("envio-premium").setAttribute('checked', '')
    envio = Math.ceil(subtotalTotal * envioPremium)
  }
  if (tipo === envioExpress) {
    document.getElementById("envio-express").setAttribute('checked', '')
    envio = Math.ceil(subtotalTotal * envioExpress)
  }
  if (tipo === envioStandard) {
    document.getElementById("envio-standard").setAttribute('checked', '')
    envio = Math.ceil(subtotalTotal * envioStandard)

  }
  showCostoEnvio()

};


document.addEventListener("DOMContentLoaded", function (e) {
  if (!user) {
    window.location = "index.html";
  }
  getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      currentCart = resultObj.data.articles[0];
      showCurrentCart();
      cantidadProductoCarrito()

    }
  });


  document.getElementById("envio-premium").addEventListener("click", function () {
    tipoDeEnvio(envioPremium);
  })
  document.getElementById("envio-express").addEventListener("click", function () {
    tipoDeEnvio(envioExpress);
  })
  document.getElementById("envio-standard").addEventListener("click", function () {
    tipoDeEnvio(envioStandard);
  })
  document.getElementById("tarjeta-credito").addEventListener('click', function () {
    document.getElementById("numero-cuenta").setAttribute('disabled', '')
    document.getElementById("numero-cuenta").value = ""
    document.getElementById("numero-tarjeta").removeAttribute('disabled')
    document.getElementById("codigo-seguridad").removeAttribute('disabled')
    document.getElementById("vencimiento-tarjeta").removeAttribute('disabled')
  })
  document.getElementById("transferencia-bancaria").addEventListener("click", function () {
    document.getElementById("numero-cuenta").removeAttribute('disabled')
    document.getElementById("numero-tarjeta").setAttribute('disabled', '')
    document.getElementById("numero-tarjeta").value = ""
    document.getElementById("codigo-seguridad").setAttribute('disabled', '')
    document.getElementById("codigo-seguridad").value = ""
    document.getElementById("vencimiento-tarjeta").setAttribute('disabled', '')
    document.getElementById("vencimiento-tarjeta").value = ""
  })
  
});
