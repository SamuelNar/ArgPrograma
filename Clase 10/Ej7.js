function pares(numeros){
   const num = numeros.filter(numeros => numeros%2===0);
   return num;
}

const numeros=[];
for (let index = 0; index < 10; index++) {
    const num = Math.floor(Math.random()*100)+1;
    numeros[index]=num;    
}
console.log(numeros);
const par = pares(numeros);
console.log(par);