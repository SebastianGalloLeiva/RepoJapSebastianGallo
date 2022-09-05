function showUser(){
    let user = localStorage.getItem("email")
    let htmlContentToAppend = ""
        htmlContentToAppend += `
            <p class="nav-link">${user}</p> 
           `          
        document.getElementsByClassName('nav-item')[3].innerHTML += htmlContentToAppend;
     }
    
    
document.addEventListener("DOMContentLoaded", function(){
    showUser(); 
});