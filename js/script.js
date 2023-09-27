const cargarJSONalLocalStorage = async() => {
    //Si el JSON está cargado en el localStorage lo trae y lo carga en la variable productos:   
    let productos = localStorage.getItem("productos"); 

    //Si el JSON NO está cargado, lo trae con 'fetch' y luego se carga al localStorage con 'setItem':
    if(productos == null){
        const response = await fetch('./json/productos.json');
        productos = await response.json();

        localStorage.setItem("productos", JSON.stringify(productos));
    }

    console.log("El JSON Puro es: ", productos);
    
    //Traigo el JSON entero del localStorage y lo guardo en una variable: 
    const misProductos = localStorage.getItem("productos");
    
    //Convierto el JSON que traje a un objeto Js y lo guardo en una variable: 
    const misProductosJs = JSON.parse(misProductos);
    console.log("Mis productos convertidos a objeto Js:");
    console.log(misProductosJs);
    
    //Sección que contendrá la lista de productos: 
    const listaDeProductos = document.querySelector('.productos-semidescripcion');

    //Bucle que crea el contenedor de cada lista de producto con su nombre, característica corta y botón:
    for(let i=0; i < misProductosJs.length; i++){
        const divContainer = document.createElement('div');    
        divContainer.classList.add('container-producto');    
        divContainer.innerHTML += `<h2>${misProductosJs[i].nombre}</h2>`
        divContainer.innerHTML += `<p>${misProductosJs[i].basico}</p>`
        const crearBoton = document.createElement('button'); 
        crearBoton.textContent = "Ver más sobre éste producto";
        crearBoton.setAttribute("id", i);
        crearBoton.classList.add("boton-pagina-principal");
        divContainer.appendChild(crearBoton);   
        listaDeProductos.appendChild(divContainer); 
    }

    document.addEventListener("click", function(event) {
    // Verificar si el elemento clickeado es un botón:
        if (event.target.tagName === "BUTTON") {
            // Obtener el id del botón clickeado:
            let botonId = event.target.id;
                
            //Sube el "id" del botón al "sessionStorage":
            sessionStorage.setItem("idBoton", botonId);  
                
            //Imprime por consola el "id" del botón presionado: 
            console.log("EL BOTÓN PRESIONADO ES:",botonId);   
                
            //Va a la página de productos.html:
            window.location.href = "descripcion.html"
        }
    })            
}

//IMPORTANTE llamar a la función de arriba para que cargue el JSON en el LocalStorage (si aún no lo hizo):
cargarJSONalLocalStorage(); 


