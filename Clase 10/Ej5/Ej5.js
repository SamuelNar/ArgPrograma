var array=["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
console.log(array); 
var nombres6Letra = array.filter(function(array){
    return array.length>=6;
})
console.log("nombres con mas de 6 letras"+nombres6Letra);

var nombreEmpiezaconM = array.filter(function(array){
    return array.startsWith('M');
})
console.log("Nombres con M al principio"+nombreEmpiezaconM);

let arrayAux=array.slice().sort();
console.log("Nombres ordenados alfabeticamente "+arrayAux); 

var Iniciales = array.map(function(array){
    return array.charAt(0);
});
console.log("Iniciales: "+Iniciales);

var Mayusculas = array.map(function(array){
    return array.toUpperCase();
})
console.log("Mayus: "+Mayusculas);

var Comienza = array.some(function(array){
    return array.startsWith('J');
})

console.log("Comienza con j"+Comienza);