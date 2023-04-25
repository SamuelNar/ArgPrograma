var array = [1, -4, 12, 0, -3, 29, -150];
let suma = 0;
array.forEach(function (element) {
    if (element >= 0) {
        suma = element + suma;
    }
});
console.log("suma: " + suma);