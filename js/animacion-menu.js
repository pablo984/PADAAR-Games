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
que dan el efecto creado en CSS: */
function animarMenu(){
    linea1.classList.toggle("activarLinea1__menu-barras");
    linea2.classList.toggle("activarLinea2__menu-barras");
    linea3.classList.toggle("activarLinea3__menu-barras");
    containerMenu.classList.toggle("animacion");
    contenidoMenu.classList.toggle("animacion-2");
}

/*ACLARACIÓN:
classList.add: agrega una clase específica a un elemento. 
Si la clase ya está presente, no ocurre ninguna duplicación; simplemente se ignora 
la adición adicional de la misma clase. Si el elemento no tiene la clase proporcionada, 
se agrega al atributo de clases del elemento.

classList.toggle: agrega una clase al elemento si no está presente, pero lo que lo hace 
diferente de "classList.add" es que, si la clase ya está presente en el elemento, se eliminará. 
En resumen, classList.toggle alternará la presencia de una clase.
*/