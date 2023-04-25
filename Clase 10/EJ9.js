function swap(array,indice1,indice2){
    [array[indice1], array[indice2] ] = [array[indice2],array[indice1]];
}

var arreglo=[1,1,2,3,4,2];
swap(arreglo,1,2);
console.log(arreglo);