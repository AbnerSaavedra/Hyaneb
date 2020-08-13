function pintarEficacia(){
    
    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("eficacia");
    element = elements[0];
    elements[0].style.backgroundColor = color;
    elements[0].addEventListener("focus", cambiarFondo(element));
    /* var URLactual = window.location.pathname;
    alert(URLactual); */
}

function cambiarFondo(element){

    /* element.style.backgroundColor = "red"; */
}

function pintarAdmon(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("admon");
    elements[0].style.backgroundColor = color;
    /* var URLactual = window.location.pathname;
    alert(URLactual); */
}

function pintarCovid(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("covid");
    elements[0].style.backgroundColor = color;
    /* var URLactual = window.location.pathname;
    alert(URLactual); */
}

function pintarUso(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("uso");
    elements[0].style.backgroundColor = color;
    /* var URLactual = window.location.pathname;
    alert(URLactual); */
}