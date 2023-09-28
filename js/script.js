//Variable que almacenará los datos JSON traidos del localStorage (si es que están):
let datosJSON;

//Variable que almacenará el dato JSON transformado a Objeto JavaScript: 
let deJSONaObjetoJs;

//Sección que contendrá la lista de productos: 
const listaDeProductos = document.querySelector('.productos-semidescripcion');

//Funcion que espera a que el DOM cargue primero para, luego, empezar a ejecutar las funciones:
window.addEventListener('DOMContentLoaded', verificarLocalStorage);

//Verificar si hay datos en el localStorage:
function verificarLocalStorage(){   
    //Busca y trae los datos del localStorage y los guarda en la variable 'datosDelLocalStorage':
    let datosDelLocalStorage = localStorage.getItem("productos"); 

    //Si no hay nada en el localStorage, ejecuta la función de 'cargarJSON':
    if(datosDelLocalStorage == null){
        console.log('El localStorage está vacío y se procederá a cargar el JSON...')
        cargarJsonYCrearListaDeProductos();
    }
    else{
        //Sí hay datos en el localStorage, se transforma el JSON a Objeto Js y se guarda en 'deJSONaObjetoJs':
        deJSONaObjetoJs = JSON.parse(datosDelLocalStorage); 
        console.log('El JSON ya estaba cargado en el localStorage y fue descargado exitosamente')
        console.log('Se transformó el JSON a Objeto Js y se guardó en "deJSONaObjetoJs" :' )
        console.log(deJSONaObjetoJs)
        crearListaDeProductos();
        obtenerIdDeBotonesYCargarloAlSessionStorage();
    }        
}

//Busca el JSON en la URL proporcionada y lo transforma a objeto JS, luego se sube el JSON puro al localStorage:
async function cargarJsonYCrearListaDeProductos(){
    const response = await fetch('./json/productos.json');
    const data = await response.json();
    console.log('Status OK: se cargó el JSON exitosamente y se transformó en Objeto JS:');
    console.log(data);  
    deJSONaObjetoJs = data;
    datosJSON = JSON.stringify(data); //Transformación de Objeto Js a JSON
    console.log("Los datos transformados de Objeto JS a JSON son:");
    console.log(datosJSON);
    console.log("Se guardó el JSON transformado como Objeto JS en la variable GLOBAL 'deJSONaObjetoJs':");
    console.log(deJSONaObjetoJs);  
    //Función que carga el JSON que están en 'datosJSON' al localStorage:
    cargarJSONalLocalStorage(); 
    console.log('Se cargó el JSON puro al localStorage (verificar en "Aplicación")');
    //Crea dinámicamente la lista de productos en la página principal:
    crearListaDeProductos();
    //Obtiene el número de ID del botón presionado y lo sube al 'sessionStorage':
    obtenerIdDeBotonesYCargarloAlSessionStorage();
}

//Carga un objeto JSON al localStorage:
function cargarJSONalLocalStorage(){
    localStorage.setItem("productos", datosJSON);
}

//Crea dinámicamente la lista de productos en la página principal: 
function crearListaDeProductos(){
    for(let i=0; i < deJSONaObjetoJs.length; i++){
        const divContainer = document.createElement('div');    
        divContainer.classList.add('container-producto');    
        divContainer.innerHTML += `<h2>${deJSONaObjetoJs[i].nombre}</h2>`
        divContainer.innerHTML += `<p>${deJSONaObjetoJs[i].basico}</p>`
        const crearBoton = document.createElement('button'); 
        crearBoton.textContent = "Ver más sobre éste producto";
        crearBoton.setAttribute("id", i);
        crearBoton.classList.add("boton-pagina-principal");
        divContainer.appendChild(crearBoton);   
        listaDeProductos.appendChild(divContainer); 
    }
}

function obtenerIdDeBotonesYCargarloAlSessionStorage(){
    document.addEventListener("click", function(event) {
        //Verificar si el elemento clickeado es un botón:
        if(event.target.tagName === "BUTTON") {
            // Obtener el id del botón clickeado:
            let botonId = event.target.id;
                        
            //Sube el "id" del botón al "sessionStorage":
            sessionStorage.setItem("idBoton", botonId);

            //Va a la página de productos.html:
            window.location.href = "descripcion.html"
        }
    })         
}










