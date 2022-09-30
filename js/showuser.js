function showUser(){
    if(localStorage.getItem("email")) {
    let user = localStorage.getItem("email")
    let htmlContentToAppend = ""
        htmlContentToAppend += `
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    ${user}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
    <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" href="index.html"  >Cerrar sesión</a></li>
  </ul>
</div>
           `      
         try {  
        document.getElementsByClassName('nav-item')[3].innerHTML += htmlContentToAppend;
    } catch (error){
        window.localStorage.removeItem("email")
    }
    }}
    
    
document.addEventListener("DOMContentLoaded", function(){
    showUser(); 
});
