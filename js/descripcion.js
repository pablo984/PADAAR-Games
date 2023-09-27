//Guarda en un array el JSON que está en el localStorage: 
const arrayDeJson = localStorage.getItem("productos");

//Guarda el "id" del boton en la siguiente variable:
let idBoton = sessionStorage.getItem("idBoton");
console.log("El TIPO de dato del sessionStorage es:", typeof(idBoton));
console.log("El ID del botón presionado es:", idBoton);

//Impresión del TIPO de dato (en este caso es un 'JSON' que a su vez es un 'String')
console.log("Tipo de dato de 'arrayJson:", typeof arrayDeJson) //Impresión del TIPO de dato ()

//Impresión del JSON: 
console.log(arrayDeJson);

//Convierte el JSON a objeto Js y lo guarda en un ARRAY porque el JSON tiene un array con 2 JSON: 
const productoIndividual = JSON.parse(arrayDeJson);
console.log('Este es el objeto que proviene del JSON:', productoIndividual);

//--------------------------------------USO DE LOS DATOS---------------------------------------------
//Ahora con el JSON convertido a objeto Js 'delJsonAObjetoJs' puedo operar con sus datos: 

//Sección que contendrá la descripción de un producto en particular:
const seccionDescripcion = document.querySelector('.productos-descripcion');
const seccionCaracteristicas = document.querySelector('.caracteristicas');

//Sólo obtiene las CLAVES del objeto que le pase del array: 
let claves = Object.keys(productoIndividual[idBoton].caracteristicas); 

//Se obtiene la URL de la imagen del producto:
let imagenDeProducto = productoIndividual[idBoton].imagen;

console.log("La cantidad de estrellas que AHORA tiene son: ", productoIndividual[idBoton].estrellas) 

const divContainerProducto = document.createElement('div');
divContainerProducto.classList.add('container-producto');

const divContainerCaracteristicas = document.createElement('div');
divContainerCaracteristicas.classList.add('container-caracteristicas');

const divContenedorEstrellas = document.createElement('div');
divContenedorEstrellas.classList.add('divEstrellas');

const etiquetaImg = document.createElement('img'); 
etiquetaImg.classList.add('foto'); // Agrega una clase CSS a la imagen
etiquetaImg.src = imagenDeProducto; // Establece la ruta de la imagen en el atributo src

//Se agrega el nombre, imagen, precio y estrellas del producto al contenedor:
divContainerProducto.innerHTML = `<h2>${productoIndividual[idBoton].nombre}</h2>`
divContainerProducto.appendChild(etiquetaImg);
divContainerProducto.innerHTML += `<p class="precio">${productoIndividual[idBoton].precio}</p>`
agregarEstrellas(divContenedorEstrellas, productoIndividual[idBoton].estrellas);
divContainerProducto.appendChild(divContenedorEstrellas);
divContainerProducto.innerHTML += `<button class="boton-volver">Volver a la página principal</button>`
seccionDescripcion.appendChild(divContainerProducto);

divContainerCaracteristicas.innerHTML = `<h3>Caracteristicas</h3>`;

//Se recorren las claves, se construyen tags, y se imprimen los valores de cada clave:
claves.forEach(clave => {
    console.log(clave);
    divContainerCaracteristicas.innerHTML += `<p><strong>${clave}</strong> ${":"} ${productoIndividual[idBoton].caracteristicas[clave]}</p>`
})    

seccionCaracteristicas.appendChild(divContainerCaracteristicas);

const botonVolver = document.querySelector('.boton-volver');

botonVolver.addEventListener('click', volverALaPaginaPrincipal);

//Agrega estrellas a los productos:
function agregarEstrellas(container, cantidad){
    let urlEstrella = "./img/estrella.png";
    for(let i=0; i<cantidad; i++){
        container.innerHTML += `<img class="estrella" src="${urlEstrella}"></img>`;        
    }    
}

function volverALaPaginaPrincipal(){
    window.location.href = 'index.html'
}