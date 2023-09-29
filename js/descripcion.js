//Guarda en un array el JSON que está en el localStorage: 
const arrayDeJson = localStorage.getItem("productos");

//Guarda el "ID" del boton en la siguiente variable:
let idBoton = localStorage.getItem("idBoton");
console.log("El ID del botón presionado es:", idBoton);

console.log("El JSON en el localStorage fue descargado exitosamente en la variable 'arrayDeJson':")

//Impresión del JSON: 
console.log(arrayDeJson);

//Convierte el JSON a Objeto Js y lo guarda en un la variable porque el JSON tiene un array con 6 JSON: 
const productosObjetoJs = JSON.parse(arrayDeJson);
console.log('Este es JSON convertido a Objeto Js:', productosObjetoJs);

//--------------------------------------USO DE LOS DATOS---------------------------------------------
//Ahora con el JSON convertido a Objeto Js 'productosObjetoJs' puedo operar con sus datos: 
//NOTA: 'idBoton' representa el INDICE del objeto dentro del array. 

//Sección que contendrá la descripción de un producto en particular:
const seccionDescripcion = document.querySelector('.productos-descripcion');
const seccionCaracteristicas = document.querySelector('.caracteristicas');

//Constante que contiene la URL de la estrella amarilla: 
const estrella = "./img/estrella.png";

//Constante que contiene la URL de la estrella blanca: 
const estrellaBlanca = "./img/estrella-blanca.png";

//Constante que contiene el número de estrellas de un producto:
const cantidadDeEstrellasDelProducto = productosObjetoJs[idBoton].puntuacion.length;

//Sólo se obtienen las CLAVES de las características del objeto que le pase del array: 
let claves = Object.keys(productosObjetoJs[idBoton].caracteristicas); 

//Se obtiene la URL de la imagen del producto y se guarda en la siguiente variable:
let urlImagen = productosObjetoJs[idBoton].imagen;

//Creación del <div> que contendrá el nombre, imagen, precio y estrellas del producto, y el botón volver:
const divContainerProducto = document.createElement('div');

//Agregado de una clase: 
divContainerProducto.classList.add('container-producto');

//Creación del <div> que contendrá las características del producto: 
const divContainerCaracteristicas = document.createElement('div');

//Agregado de una clase: 
divContainerCaracteristicas.classList.add('container-caracteristicas');

//Creación del <div> que contendrá las imágens de las estrellas:
const divContenedorEstrellas = document.createElement('div');

//Agregado de una clase: 
divContenedorEstrellas.classList.add('divEstrellas');

//Creación de una etiqueta del tipo <img>:
const etiquetaImg = document.createElement('img'); 

//Agregado de una clase:
etiquetaImg.classList.add('foto'); 

//Establece la ruta de la imagen la cual se encuentra dentro de la variable 'urlImagen':
etiquetaImg.src = urlImagen; 

//Se agrega el nombre, imagen, precio y estrellas del producto al contenedor:
divContainerProducto.innerHTML = `<h2>${productosObjetoJs[idBoton].nombre}</h2>`
divContainerProducto.appendChild(etiquetaImg);
divContainerProducto.innerHTML += `<p class="precio">${productosObjetoJs[idBoton].precio}</p>`
//Función que agrega estrellas al contenedor de estrellas:
agregarEstrellas(divContenedorEstrellas, cantidadDeEstrellasDelProducto, estrella);
//Ahora agrego las estrellas blancas al contenedor de estrellas: 
agregarEstrellas(divContenedorEstrellas, (5 - cantidadDeEstrellasDelProducto), estrellaBlanca);
divContainerProducto.appendChild(divContenedorEstrellas);
divContainerProducto.innerHTML += `<button class="boton-volver">Volver a la página principal</button>`
//Se agrega todo lo creado anteriormente a la sección 'seccionDescripcion':
seccionDescripcion.appendChild(divContainerProducto);

//Se le coloca un subtítulo al container de características del producto:
divContainerCaracteristicas.innerHTML = `<h3>Características</h3>`;

//Se recorren las claves, se construyen <p> y se imprimen los valores de cada clave en 'negrita' en el conatiner de características:
claves.forEach(clave => {
    divContainerCaracteristicas.innerHTML += `<p><strong>${clave}</strong> ${":"} ${productosObjetoJs[idBoton].caracteristicas[clave]}</p>`
})    

//Se coloca todo lo del container de características dentro de la <secction> de características: 
seccionCaracteristicas.appendChild(divContainerCaracteristicas);

//El siguiente botón fue creado DINÁMICAMENTE en la línea 76 y fue insertado en el documento: 
const botonVolver = document.querySelector('.boton-volver');

botonVolver.addEventListener('click', volverALaPaginaPrincipal);

//Función que agrega a cada producto tantas estrellas como diga la clave 'puntuacion' del JOSN:
function agregarEstrellas(container, cantidad, colorDeEstrella){
    for(let i=0; i<cantidad; i++){
        container.innerHTML += `<img class="estrella" src="${colorDeEstrella}"></img>`;        
    }    
}

function volverALaPaginaPrincipal(){
    window.location.href = 'index.html'
}