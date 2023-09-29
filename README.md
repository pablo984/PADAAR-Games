Proyecto final de #Argentina Programa 4.0

Funciones utilizadas en este proyecto: 

* Archivo JSON: en este se creó el contenido de productos que serán mostrados en el documento principal 
de este proyecto. 

* Fetch + asincronismo: se utilizó una API fetch para leer el contenido del archivo JSON, y armar el HTML dinámico, 
combinando template string + template literals dentro de una función la cual recibe como parámetro 
cada producto del array de objetos.

* DOM: en la estructura de template string, se agregó un botón para poder ver el detalle del producto.
Se utilizó una función que me permitió  identificar qué botón fue presionado y, a partir de ahí,
mostrar en detalle el contenido y las características del producto en particular.

* Evento: con un evento se identificó el objeto literal correspondiente al producto seleccionado, y luego se
almacenó en LocalStorage. Luego se redirecciona la página para mostrar el detalle del producto.

Problemas a la hora de realizar el trabajo: 

* En GitHub Pages no me cargaba las imágenes cuya url empezaban con dos puntos: "../img/foto.jpg"
* SOLUCIÓN: le quité un punto y funcionó: "./img/foto.jpg".
Aparentemente, en GitHub Pages el punto de referencia es el HTML (que no está dentro de ninguna  
carpeta) el cual contiene el script de Js. Entonces si pongo ../ es como si me saldría de la carpeta principal del 
proyecto y buscara la foto. En cambio en VSC, al parecer da lo mismo poner ../ o ./, ya que detecta me funcionaba
de las dos maneras. 

* Con "fetch" tuve problemas porque tenía funciones() que se ejecutaban antes de que cargue el JSON con la función 
"fetch". Dichas funciones estaban debajo de todo, pero eran las primeras que se ejecutaban, ya que las estaba LLAMANDO: 
ejemplo: "crearListaDeProductos();"
* SOLUCIÓN: coloqué las funciones que quería que se ejecuten después de cargar el JSON en la misma función y debajo de
la función que trae el JSON y lo transforma en objeto Js. 

* Cuando abría la página de GitHub Pages en mi PC, al borrar el localStorage, me actualizaba la información que fui modificando 
del JSON. Pero cuando accedía desde el móvil, me seguía mostrando la info del JSON original que había hecho, ya que no se 
borraba la información del localStorage del navegador del teléfono. Esto me traía problemas como, por ejemplo, no mostrar las
imágenes de las estrellas, ya que la "puntuacion" la había agregado después al JSON. 
* SOLUCIÓN 1: 1- Abrir la página de GitPages en el celular.
2- Ir a los 3 puntitos y a "Configuración".
3- En la parte inferior, ir a "Configuración de sitios". 
4- Abajo de todo, ir a "Datos almacenados".
5- En la lupa, escribir para buscar "github" y, cuando aparezca, hacer clic en el icono de github  
   en el que tiene el gato dibujado, los otros iconos no. 
6- Una vez dentro de la configuración del sitio, en la parte que dice "N KB de datos almacenados"   
   hacer clic en el tacho de basura que hay a la derecha para borrar el localStorage. Dar "Si" al 
   mensaje de advertencia. 
7- Recargar la página o volver a abrirla de los marcadores para que actualice el sitio con los 
   datos del JSON actualizado. Listo!

*SOLUCIÓN 2: ejecutar como primera función  "localStorage.clear()" para borrar el localStorage y actualizar datos que se hayan 
modificado en el JSON. Luego, una vez actualizado el JSON, lo subo a GitHub, abro la página para actualizar el JSON y, una 
vez actualizado, puedo quitar dicha función del código y volver a subir el proyecto a GitHub.     
