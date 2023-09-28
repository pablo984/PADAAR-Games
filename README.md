Proyecto final de #Argentina Programa 4.0

Funciones utilizadas en este proyecto: 

* Archivo JSON 
En este se creó el contenido de productos que serán mostrados en el documento principal 
de este proyecto. 

* Fetch + asincronismo
Se utilizó una API fetch para leer el contenido del archivo JSON, y armar el HTML dinámico, 
combinando template string + template literals dentro de una función la cual recibe como parámetro 
cada producto del array de objetos.

* DOM
En la estructura de template string, se agregó un botón para poder ver el detalle del producto.
Se utilizó una función que me permitió  identificar qué botón fue presionado y, a partir de ahí,
mostrar en detalle el contenido y las características del producto en particular.

* Evento
Con un evento se identificó el objeto literal correspondiente al producto seleccionado, y luego se
almacenó en LocalStorage. Luego se redirecciona la página para mostrar el detalle del producto.
