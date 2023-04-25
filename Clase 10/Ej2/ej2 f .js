var array=[1,2,3,4,5,6];
let suma=0;
for (var i = 0; i < array.length; i++) {
	suma=array[i]+suma;
}
let prom=suma/array.length;
console.log(prom);