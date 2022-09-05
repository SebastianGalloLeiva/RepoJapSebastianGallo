const ORDER_ASC_BY_PRICE = "1-9";
const ORDER_DESC_BY_PRICE = "9-1";
const ORDER_BY_SOLD_COUNT = "Cant.";

let currentProductsArray = [];
let minCount = undefined;
let maxCount = undefined;
let jsonProducto = localStorage.getItem("catID");
let search = undefined;
let user = localStorage.getItem("email")




function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRICE)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRICE){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_SOLD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}

function showProductsList(){
    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){
                if ((product.name.toLowerCase().includes(search)) ||(product.description.toLowerCase().includes(search))|| (search == undefined)){
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `      
            }   } 
        document.getElementById("products-container").innerHTML = htmlContentToAppend;
            } 
     
        

    }

    function sortAndShowProducts(sortCriteria, productsArray){
        currentSortCriteria = sortCriteria;
    
        if(productsArray != undefined){  
            currentProductsArray = productsArray;
        }
    
        currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    
        showProductsList();
    }
    
    

document.addEventListener("DOMContentLoaded", function(e){
    if (!user){ window.location = "index.html"};
    getJSONData(PRODUCTS_URL + jsonProducto + ".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            categoriaProd = resultObj.data.catName
            currentProductsArray = resultObj.data.products
            document.getElementById("categoria-producto").innerHTML += categoriaProd;
            showProductsList();
        }
        else {
            document.getElementById("products-container").innerHTML =` <div class="container">
            <div class=" alert-danger text-center" >
              <h4 class="alert-heading">Elige una categoria.</h4>
            </div>  
          </div>`;
      
        }
    })
    ;

    

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRICE);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRICE);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });


    document.getElementById("site-search").addEventListener("input", function() {
        search = document.getElementById("site-search").value.toLowerCase();
        showProductsList()

        
    });
    
    



});





