function agregarNombre() {
	// Obtenemos el valor del input
	var nombre = document.getElementById("nombre").value;

	if (nombre !== "") {
		// Creamos un nuevo elemento de lista
		var nuevoElemento = document.createElement("li");

		// Creamos un nodo de texto con el nombre
		var texto = document.createTextNode(nombre);

		// Añadimos el nodo de texto al nuevo elemento de lista
		nuevoElemento.appendChild(texto);

		// Añadimos el nuevo elemento de lista a la lista desordenada
		document.getElementById("listaNombres").appendChild(nuevoElemento);

		// Borramos el contenido del input
		document.getElementById("nombre").value = "";
	}
}
