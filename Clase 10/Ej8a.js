function palabras(array){
    let aux =['a','e','i','o','u'];
    return array.filter(pal => aux.includes(pal[0].toLowerCase()));
}
var nombre=['ana','jose','delfina'];
console.log(palabras(nombre));