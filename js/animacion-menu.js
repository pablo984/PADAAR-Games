/*Identificación del contenedor padre: */
const menuBarra = document.querySelector(".menu__barras");
const containerMenu = document.querySelector(".container-menu")
const contenidoMenu = document.querySelector(".contenido-menu");

/*Cada una de las 3 líneas el menú: */
const linea1 = document.querySelector(".linea1__menu-barras");
const linea2 = document.querySelector(".linea2__menu-barras");
const linea3 = document.querySelector(".linea3__menu-barras");


/*Evento al hacer clic: */
menuBarra.addEventListener("click", animarMenu); 

/*Función que agrega (con "classList") a cada línea del menú 
las clases que no fueron declaradas en el HTML y que son las 
que dan el efecto creado previamente en el CSS: */
function animarMenu(){
    linea1.classList.toggle("activarLinea1__menu-barras");
    linea2.classList.toggle("activarLinea2__menu-barras");
    linea3.classList.toggle("activarLinea3__menu-barras");
    containerMenu.classList.toggle("animacion");
    contenidoMenu.classList.toggle("animacion-2");
}

/*ACLARACIÓN:
classList.toggle: agrega una clase al elemento si no está presente, pero lo que lo hace 
diferente de "classList.add" es que, si la clase ya está presente en el elemento, se eliminará. 
*/