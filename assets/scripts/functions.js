function pintarEficacia(){
    
    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("eficacia");
    this.eliminarFondo1();
    elements[0].style.backgroundColor = color;
}

function pintarAdmon(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("admon");
    this.eliminarFondo2();
    elements[0].style.backgroundColor = color;
}

function pintarCovid(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("covid");
    this.eliminarFondo3();
    elements[0].style.backgroundColor = color;
}

function pintarUso(){

    let color = "#004587";
    let elements;

    console.log("Aquí");
    elements = document.getElementsByClassName("uso");
    this.eliminarFondo4();
    elements[0].style.backgroundColor = color;
}

function eliminarFondo1(){

    let bcolor = "#3AA7DF";

    elements2 = document.getElementsByClassName("admon");
    elements3 = document.getElementsByClassName("covid");
    elements4 = document.getElementsByClassName("uso");

    elements2[0].style.backgroundColor = bcolor;
    elements3[0].style.backgroundColor = bcolor;
    elements4[0].style.backgroundColor = bcolor;
    
}

function eliminarFondo2(){

    let bcolor = "#3AA7DF";
    
    elements1 = document.getElementsByClassName("eficacia");
    elements3 = document.getElementsByClassName("covid");
    elements4 = document.getElementsByClassName("uso");
    
    elements1[0].style.backgroundColor = bcolor;
    elements3[0].style.backgroundColor = bcolor;
    elements4[0].style.backgroundColor = bcolor;
        
}

function eliminarFondo3(){

    let bcolor = "#3AA7DF";
    
    elements1 = document.getElementsByClassName("eficacia");
    elements2 = document.getElementsByClassName("admon");
    elements4 = document.getElementsByClassName("uso");
    
    elements1[0].style.backgroundColor = bcolor;
    elements2[0].style.backgroundColor = bcolor;
    elements4[0].style.backgroundColor = bcolor;
        
}

function eliminarFondo4(){

    let bcolor = "#3AA7DF";
    
    elements1 = document.getElementsByClassName("eficacia");
    elements2 = document.getElementsByClassName("admon");
    elements3 = document.getElementsByClassName("covid");
    
    elements1[0].style.backgroundColor = bcolor;
    elements2[0].style.backgroundColor = bcolor;
    elements3[0].style.backgroundColor = bcolor;
        
}