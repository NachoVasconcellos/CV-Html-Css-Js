// Menu Lateral

let menu_visible = false
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if(menu_visible == false) {//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

//oculto el menu una vez que selecciono una opción

let links = document.querySelectorAll("nav a");
for(let x = 0; x < links.length; x++) {
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id

function crearBarra(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales asi luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let github = document.getElementById("github");
crearBarra(github);
let bootstrap = document.getElementById("bootstrap");
crearBarra(bootstrap);
let responsive = document.getElementById("responsive");
crearBarra(responsive);

//Ahora a guardar la cantidad de barritas que se van a ir pintando con un array

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    let habilidades = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>= 300 && entro == false) {
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 10, 1, intervalJavascript);
        },100);
        const intervalReact = setInterval(function(){
            pintarBarra(react, 9, 2, intervalReact);
        },100);
        const intervalGithub = setInterval(function(){
            pintarBarra(github, 10, 3, intervalGithub);
        },100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 9, 4, intervalBootstrap);
        },100);
        const intervalResponsive = setInterval(function(){
            pintarBarra(responsive, 10, 5, intervalResponsive);
        },100);
    }
}

//lleno una barra con la cantidad indicada

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "rgb(21, 139, 194)";
    } else {
        clearInterval(interval)
    }
}

//detectar scrolling del mouse para animacion de barra

window.onscroll = function(){
    efectoHabilidades();
}