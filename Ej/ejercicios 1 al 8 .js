//ejercicio 1
let colores = ["rojo","amarillo","azul","verde","gris"];

//ejercicio 2
let color = colores[2];


//ejercicio 3
let pos = colores[0][0];
console.log(pos);

//ejercicio 4 
function numero(){
	let num = Math.floor(Math.random()*98)+1;
	return num;	
}

console.log(numero());

//ejercicio 5
let arreglo=[];

for (var i = 1; i <= 10; i++) {
	arreglo.push(i);
}
console.log(arreglo);

//tenia otro idea que era 
for (var i = 0; i <= 10; i++) {
	arreglo[i]=i+1;
} 


//ejercicio 6 
let array=[];
for (var i = 0; i < 10; i++) {
	array.push(numero());
}
console.log(array);
// ejercicio 7
let a = array;  //obviamente tiene que existir array
console.log(a);

//ejercicio 8
function cadenaTexto(){
	let aux="";
	let input;
	do{
		input=prompt("ingresa una cadena de texto (o escribe 'cancelar' para salir)");
		if(input!=="cancelar"){
			aux += input+"-";
		}
	}while(input !== "cancelar");	
	return aux.slice(0,-1);
}
console.log(cadenaTexto());
//parte 2 
function cadenaTextos(){
	let aux=[];
	let input;
	do{
		input=prompt("ingresa una cadena de texto (o escribe 'cancelar' para salir)");
		if(input!=="cancelar"){
			aux.push(input);
		}
	}while(input !== "cancelar");	
	return aux.join("-");
}
console.log(cadenaTexto());

