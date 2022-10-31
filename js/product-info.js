let product = "";
let id = localStorage.getItem("prodID");
let jsonProducto = localStorage.getItem("catID");
let currentCategory = "";
let currentProductComments = "";
let comentario = undefined;
let userScore = undefined;
let user = localStorage.getItem("email");
let comentarioNro = 1;
let usercomment = "";
let comentariosdelapeople = [];
let userCart = "";


function setProdID(id) {
  localStorage.setItem("prodID", id);
  window.location = "product-info.html";
}
function setCart() {
  userCart = {
    productId: id,
    name: product.name,
    cost: product.cost,
    moneda: product.currency,
    imagen: product.images[0],
    count: 1,
  };
  
  try {
    newCart = JSON.parse(localStorage.getItem(`cart_${user}`))
    if (newCart['producto' + id]){

      let cantidades = parseInt( newCart['producto' + id].count) + 1
     
      newCart['producto'+id].count = cantidades

      localStorage.setItem(`cart_${user}`, JSON.stringify(newCart))
      




    }
    else {
  newCart['producto' + id] = userCart
  newCart['producto' + id].count = 1
  
  

  localStorage.setItem(`cart_${user}`, JSON.stringify(newCart))
    }
    
  } catch (error) {
    const newCart = new Object();
    
  newCart['producto' + id] = userCart


  localStorage.setItem(`cart_${user}`, JSON.stringify(newCart))

    
  }
  ;

  window.location = "cart.html";
}


function showProduct() {
  let htmlContentToAppend = "";
  let images = product.images;
  let image = "";
  image = `<div class="carousel-item active">
    <img src="${product.images[0]}" class="d-block w-100">
  </div>`;
  images.shift();
  for (let i in images) {
    image += `<div class="carousel-item">
        <img src="${images[i]}" class="d-block w-100">
      </div>`;
  }

  htmlContentToAppend += `
        <div class="row">
        <div class="col">

         <h1> ${product.name} </h1> 
         </div>
         <div align="right" class="col">

         <button type="button" class="btn btn-success" onclick="setCart()">Comprar</button>
         </div>
         </div>

         <hr>
         <h2> Precio </h2>
         <p2> ${product.currency} ${product.cost}  </p2>
         <br>
         <h2> Descripcion </h2>
         <p2>${product.description} </p2> 
         <br>
         <h2> Categoria </h2>
         <p2>${product.category} </p2> 
         <br>
         <h2> Cantidad de vendidos </h2>
         <p2>${product.soldCount} </p2> 
         <br>
         <h2> Imagenes ilustrativas </h2>
         
    
  </div>
</div>
         `;
  document.getElementById("info-producto").innerHTML = htmlContentToAppend;
  contenidoParaAgregar = `
         ${image}
         `;
  document.getElementById("imagenes-carousel").innerHTML +=
    contenidoParaAgregar;
}

function showComments() {
  let htmlContentToAppend = "";
  let comments = currentProductComments;
  let rating = "";
  if (comments.length == 0 && !localStorage.getItem(`commentario${id}`)) {
    htmlContentToAppend = ` <p>No hay comentarios, sé el primero en comentar! </p>`;
    document.getElementById("user-comment").innerHTML = htmlContentToAppend;
  }

  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let scores = comment.score;
    for (let i = 0; i < scores + 1; i++) {
      rating += `<span class="fa fa-star checked"></span>`;
    }
    for (let i = scores; i < 5; i++) {
      rating += `<span class="fa fa-star "></span>`;
    }

    htmlContentToAppend += `
        <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1"><strong>${comment.user}</strong></h4>
                            <p class="mb-1"> ${comment.dateTime} </p>
                           <div class="col-3" ${rating} </div>
                        </div>
                        <p class="mb-1">${comment.description}</p>
                    </div>
                </div>
            </div>
        `;
    document.getElementById("user-comment").innerHTML = htmlContentToAppend;
    rating = "";
  }
}

function showNewComments() {
  let htmlContentToAppend = "";
  let newrating = "";
  let newcomments = JSON.parse(localStorage.getItem(`commentario${id}`));
  for (let i = 0; i < newcomments.length; i++) {
    let newcomment = newcomments[i];
    let scores = newcomment.score;
    for (let i = 0; i <= scores; i++) {
      newrating += `<span class="fa fa-star checked"></span>`;
    }
    for (let i = scores; i < 5; i++) {
      newrating += `<span class="fa fa-star "></span>`;
    }

    htmlContentToAppend = `
        <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1"><strong>${newcomment.User}</strong></h4>
                            <p class="mb-1"> ${newcomment.fecha} </p>
                           <div class="col-3" ${newrating} </div>
                        </div>
                        <p class="mb-1">${newcomment.commentario}</p>
                    </div>
                </div>
            </div>
        `;
    document.getElementById("user-comment").innerHTML += htmlContentToAppend;
    newrating = "";
  }
}

function saveComment(comentarioUsuario, puntaje) {
  if (localStorage.getItem(`commentario${id}`)) {
    comentariosdelapeople = JSON.parse(
      localStorage.getItem(`commentario${id}`)
    );
  }
  let now = new Date();
  let ano = now.getFullYear();
  let mes = ("0" + (now.getMonth() + 1)).slice(-2);
  let dia = ("0" + now.getDate()).slice(-2);
  let horas = ("0" + now.getHours()).slice(-2);
  let minutos = ("0" + now.getMinutes()).slice(-2);
  let segundos = ("0" + now.getSeconds()).slice(-2);
  let dateTime = `${ano}-${mes}-${dia} `;
  dateTime += `${horas}:${minutos}:${segundos}`;
  usercomment = {
    User: user,
    score: userScore,
    commentario: comentario,
    productoid: id,
    fecha: dateTime,
  };

 

  comentariosdelapeople.push(usercomment);

  localStorage.setItem(
    `commentario${id}`,
    JSON.stringify(comentariosdelapeople)
  );
}

function showRelatedProducts() {
  let htmlContentToAppend = "";
  for (let i = 0; i < relatedProducts.length; i++) {
    let relatedProduct = relatedProducts[i];

    htmlContentToAppend += `
    <div onclick="setProdID(${relatedProduct.id})" class="w-25 col-sm list-group-item list-group-item-action cursor-active">
    
    <img src="${relatedProduct.image}" class="img-fluid"></img>
            ${relatedProduct.name}
            </div>
         `;
    document.getElementById("related-products").innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL + id + ".json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      product = resultObj.data;
      relatedProducts = product.relatedProducts;
      showProduct();
      showRelatedProducts();
    }
  });
});

document.addEventListener("DOMContentLoaded", function (e) {
  if (!user) {
    window.location = "index.html";
  }
  getJSONData(PRODUCT_INFO_COMMENTS_URL + id + ".json").then(function (
    resultComm
  ) {
    if (resultComm.status === "ok") {
      currentProductComments = resultComm.data;
      showComments(currentProductComments);
    }
  });
});

document
  .getElementById("enviar-comentario")
  .addEventListener("click", function () {
    comentario = document.getElementById("user-made-comment").value;
    userScore = document.getElementById("user-rating").value;
    let seCumple = true;
    if (comentario == "") {
      seCumple = false;
      alert("Ingresar comentario por favor.");
    }
    if (userScore == "Tu puntuacion") {
      seCumple = false;
      alert("Ingresar puntuacion.");
    }
    if (seCumple) {
      saveComment(comentario, userScore);
    }
  });

document.addEventListener("DOMContentLoaded", function (e) {
  if (localStorage.getItem(`commentario${id}`)) {
    getJSONData(PRODUCT_INFO_URL + id + ".json").then(function (resultObj) {
      if (resultObj.status === "ok") {
        showNewComments();
      }
    });
  }
});

