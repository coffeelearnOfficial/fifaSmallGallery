
// ELEMENTOS DEL DOM
let cup = document.getElementById("cup");
let messi = document.getElementById("messi-img");
let cr7 = document.getElementById("cr7-img");
let luka = document.getElementById("luka-img");
let container = document.getElementById("container-fifa");
let title = document.getElementById("title");
let names = document.getElementById("sub-text");

// FUNCION POR DEFAULT
        // CADA ELEMENTO EN SU FUNCIÓN TIENE UN "hidden" para ocultar los elementos que no se quieran ver
        // TAMBIÉN TIENE ESTILOS PARA EL FONDO DE COLOR Y EL EXTO DEL TÍTULO
function hideElements(){

        cup.hidden = false;
        messi.hidden = true;
        cr7.hidden = true;
        luka.hidden = true;

        name.innerText = "CLICK ON!!!";
        container.style.backgroundColor = null;
        title.style.color = null;
        
}

hideElements();

const messiBTN = document.getElementById("messi").onclick = function messiPlayer(){
    cup.hidden = true;
    cr7.hidden = true;
    messi.hidden= false;
    luka.hidden = true;

    names.innerText = "Lionel Messi";
    container.style.backgroundColor = "#6CACE4";
    title.style.color = "#EFF0E6";
}

const cr7BTN = document.getElementById("cr7").onclick = function cr7Player(){
    cup.hidden = true;
    cr7.hidden = false;
    messi.hidden= true;
    luka.hidden = true;

    names.innerText = "Cristiano Ronaldo";
    container.style.backgroundColor = "#FB0404";
    title.style.color = "#EDED09";
}

const lukaBTN = document.getElementById("luka").onclick = function lukaPlayer(){
    cup.hidden = true;
    cr7.hidden = true;
    messi.hidden= true;
    luka.hidden = false;

    names.innerText = "Luka Modrić";
    container.style.backgroundColor = "#1B1494";
    title.style.color = "#FA0505";
}

const defaultBTN = document.getElementById("default").onclick = function defaultOption(){
    hideElements();
}
