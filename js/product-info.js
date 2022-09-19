let product = "";
let id = localStorage.getItem("prodID");
let jsonProducto = localStorage.getItem("catID");
let currentCategory = ""
let currentProductComments = ""
let comentario = undefined;
let userScore = undefined;
let user = localStorage.getItem("email")
let comentarioNro = 1;
let usercomment = ""




function showProduct(){
    let htmlContentToAppend= "";
    let images = product.images
    let image = ""
    for (let i in images) {
        image += `<img src="${product.images[i]}" class="col-3"></img>`
       }
    htmlContentToAppend += `
         <h1> ${product.name} </h1>
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
         <div class="row m-3">
            ${image}
            </div>
         `
         document.getElementById("info-producto").innerHTML = htmlContentToAppend;
}

function showComments(){
    let htmlContentToAppend ="";
    let comments = currentProductComments;
    let rating = ""
    if (comments.length == 0){ htmlContentToAppend = ` <p>No hay comentarios, sé el primero en comentar! </p>`
    document.getElementById("user-comment").innerHTML = htmlContentToAppend;
};

    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        let scores = comment.score;
    for (let i = 0; i < scores+1; i++) {
        rating += `<span class="fa fa-star checked"></span>`
        } 
    for (let i = scores; i<5; i++) {
        rating += `<span class="fa fa-star "></span>`
    }   

        htmlContentToAppend +=`
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
        `
        document.getElementById("user-comment").innerHTML = htmlContentToAppend;
        rating = "";
    }
}

function saveComment(comentarioUsuario, puntaje){
    if (!localStorage.getItem("contador")){
    localStorage.setItem("contador", comentarioNro)};
    contador = localStorage.getItem("contador")
    contador ++
    let commentario = comentarioUsuario;
    let score = puntaje;
    comentarioNro ++;  
    let now = new Date();
    let dateTime = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} `;
        dateTime += `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        usercomment = { User: user,
                        score: userScore,
                        commentario: comentario,
                        productoid: id,
                        fecha: dateTime,
                        
        }

    localStorage.setItem(`commentario${contador + id}`, JSON.stringify(usercomment))
    localStorage.setItem('contador', contador ++)

}



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + id + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            product = resultObj.data
            showProduct();            
        }
    })
    
});

document.addEventListener("DOMContentLoaded", function(e){
    if (!user){ window.location = "index.html"};
    getJSONData(PRODUCT_INFO_COMMENTS_URL + id + ".json").then(function(resultComm){
        if (resultComm.status === "ok"){
            currentProductComments = resultComm.data
            // console.log(currentProductComments);
            showComments(currentProductComments);
        }
    })
});

document.getElementById("enviar-comentario").addEventListener("click", function(){
        comentario = document.getElementById("user-made-comment").value;
        userScore = document.getElementById("user-rating").value;
        saveComment(comentario, userScore);
        
        
})





