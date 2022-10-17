let user = localStorage.getItem("email");

let cantidad = localStorage.getItem("cantidad");

function showCurrentCart() {
    if (user != 25801 || cantidad == 0) {
        let htmlContentToAppend = `
        <div class="alert alert-danger" role="alert">
  <h4 class="alert-heading">No hay nada en el carrito</h4>
        </div>
        `;

        document.getElementById("cart").innerHTML = htmlContentToAppend;
    } else {
        let htmlContentToAppend = "";
        let currentCartToShow = currentCart;
        let subtotal = currentCartToShow.unitCost * cantidad;
        
        htmlContentToAppend = `
        <div class="container col-md-7 m-auto mt-5">
        <h1 class="text-center">Carrito de compras</h1>
        <h4 class="mb-5 "> <b>Articulos a comprar:</b></h2>
          <div class="row align-items-start">
            <div class="col">
            </div>
            <div class="col">
              <p> <b>Nombre</b></p>
            </div>
            <div class="col">
              <p> <b>Costo</b></p>
            </div>
            <div class="col">
              <p> <b>Cantidad</b></p>
            </div>
            <div class="col">
              <p> <b>Subtotal</b></p>
            </div>
          </div>
          <hr class="border-2">
          <div class="row align-items-start">
          <div class="col">
          <img src="${currentCartToShow.image}" class="imagen-carrito">
        </div>
        <div class="col">
          ${currentCartToShow.name}
        </div>
        <div class="col">
         ${currentCartToShow.currency} ${currentCartToShow.unitCost}
        </div>
        <div class="col">
          <div class="form-outline col-5">
            <input type="number" id="typeNumber" class="form-control" value="${cantidad}" />
          </div>
        </div>
        <div class="col">

        <b>${currentCartToShow.currency} ${subtotal}</b>
        </div>
          </div>
  
      <hr>
      <hr>
  
      <div class="row">
        <div class="col-md-8 mb-4">
  
          <div class=" mb-4">
            <div class="m-3">
              <h2>Tipo de envio</h2>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="envio" id="envio-premium" checked>
                <label class="form-check-label" for="envio-premium">
                  Premium 2 a 5 dias (15%)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="envio" id="envio-express">
                <label class="form-check-label" for="envio-express">
                  Express 5 a 8 dias (7%)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="envio" id="envio-standard">
                <label class="form-check-label" for="envio-standard">
                  Standard 12 a 15 dias (5%)
                </label>
              </div>
            </div>
            <div class=" py-3">
              <h5 class="mb-0">Direccion de envio</h5>
            </div>
            <div class="">
              <form>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form7Example1">Calle</label>
                      <input type="text" id="form7Example1" class="form-control" />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form7Example2">Numero</label>
                      <input type="text" id="form7Example2" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form7Example3">Esquina</label>
                      <input type="text" id="form7Example3" class="form-control" />
                    </div>
                  </div>
                  <div class="col">
                    
                    </div>
                    <div class="form-outline mb-4">
                    <button type="button" class="btn btn-success" >Checkout</button>
                  </div>
                </div>
  
              </form>
            </div>
          </div>
        </div>
  </div>
  
      </div>
        `;

        document.getElementById("cart").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    if (!user) {
        window.location = "index.html";
    }
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            currentCart = resultObj.data.articles[0];
            showCurrentCart();
        }
    });
});

document.addEventListener("DOMContentLoaded", function (e) {
    
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            document
                .getElementById("typeNumber")
                .addEventListener("change", function () {
                    cantidad = localStorage.setItem(
                        "cantidad",
                        document.getElementById("typeNumber").value
                    );
                    location.reload();
                });
        }
    });
});

//progreso hasta ahora desafiate

//Esto es para el desafiate
// function showCurrentCart() {
//     console.log(localStorage.getItem(`cart_${user}`))

//         let htmlContentToAppend = "";
//         let newCart = JSON.parse(localStorage.getItem(`cart_${user}`))
//         console.log(newCart)

//        // let subtotal = (cantidad * newCart.cost);
//         for (let i = 0; i < newCart.length; i++) {
//             const cart = newCart[i];
//             subtotal = (cart.count * cart.cost)

//         htmlContentToAppend += `
//         <div class="row m-2">
//         <div class="col">
//             <img src="${cart.imagen}" class="imagen-carrito">
//           </div>
//           <div class="col">
//             ${cart.name}
//           </div>
//           <div class="col">
//            ${cart.moneda} ${cart.cost}
//           </div>
//           <div class="col">
//             <div class="form-outline col-5">
//               <input type="number" id="typeNumber" class="form-control" value="${cart.count}" />
//             </div>
//           </div>
//           <div class="col">

//           <b>${cart.moneda} ${subtotal} </b>
//           </div>
//           </div>`;
//         }

//         document.getElementById("cart").innerHTML += htmlContentToAppend;
//     }

// let user = localStorage.getItem("email");

// let cantidad = localStorage.getItem("cantidad")

// function showCurrentCart() {
//     console.log(localStorage.getItem(`cart_${user}`))

//         let htmlContentToAppend = "";
//         let newCart = JSON.parse(localStorage.getItem(`cart_${user}`))
//         console.log(newCart)

//        // let subtotal = (cantidad * newCart.cost);
//         for (let i = 0; i < newCart.length; i++) {
//             const cart = newCart[i];
//             subtotal = (cart.count * cart.cost)

//         htmlContentToAppend += `
//         <div class="row m-2">
//         <div class="col">
//             <img src="${cart.imagen}" class="imagen-carrito">
//           </div>
//           <div class="col">
//             ${cart.name}
//           </div>
//           <div class="col">
//            ${cart.moneda} ${cart.cost}
//           </div>
//           <div class="col">
//             <div class="form-outline col-5">
//               <input type="number" id="typeNumber" class="form-control" value="${cart.count}" />
//             </div>
//           </div>
//           <div class="col">

//           <b>${cart.moneda} ${subtotal} </b>
//           </div>
//           </div>`;
//         }

//         document.getElementById("cart").innerHTML += htmlContentToAppend;
//     }

// document.addEventListener("DOMContentLoaded", function (e) {
//     if (!user) {
//         window.location = "index.html";
//     }
//     getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
//         if (resultObj.status === "ok") {
//             currentCart = resultObj.data.articles[0];
//             showCurrentCart();
//         }
//     });
// });
