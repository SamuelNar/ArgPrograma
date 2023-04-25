function generarNumeros() {
    // Generar un array de números aleatorios
    var numeros = [];
    for (var i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100));
    }

    var listaArregloAleatorio=document.getElementById("numero-aleatorio");
    listaArregloAleatorio.innerHTML="";
    for (var i = 0; i < numeros.length; i++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(numeros[i]));
      listaArregloAleatorio.appendChild(item);
    }

    // Ordenar el array de números
    numeros.sort(function(a, b) {
        return a - b;
    });

    // Mostrar los números en una lista HTML desordenada
    var lista = document.getElementById("numeros");
    lista.innerHTML = "";
    for (var i = 0; i < numeros.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(numeros[i]));
        lista.appendChild(item);
    }
}

window.onload = function() {
    var boton = document.getElementById("boton");
    boton.addEventListener("click", generarNumeros);
}



