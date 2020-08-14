var eficacia = document.getElementById("eficacia");
eficacia.addEventListener("click", function(){

    eliminarFondo();
    pintarFondo(eficacia);
});

var admon = document.getElementById("admon");
admon.addEventListener("click", function(){
    
    eliminarFondo();
    pintarFondo(admon);
})

var covid = document.getElementById("covid");
covid.addEventListener("click", function(){
    
    eliminarFondo();
    pintarFondo(covid);
})

var uso = document.getElementById("uso");
uso.addEventListener("click", function(){
    
    eliminarFondo();
    pintarFondo(uso);
})
function pintarFondo(element){

    let color = "#004587";
    element.parentNode.style.backgroundColor = color;
}

function eliminarFondo(){

    let bcolor = "#3AA7DF";

    elements1 = document.getElementById("eficacia");
    elements2 = document.getElementById("admon");
    elements3 = document.getElementById("covid");
    elements4 = document.getElementById("uso");

    elements1.parentNode.style.backgroundColor = bcolor;
    elements2.parentNode.style.backgroundColor = bcolor;
    elements3.parentNode.style.backgroundColor = bcolor;
    elements4.parentNode.style.backgroundColor = bcolor;
    
}