var array=["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const color=prompt("Ingrese un color: ");

if(array.includes(color)){
    console.log(`${color} se encuentra en la lista`);
}else{
    console.log(`${color} no se encuentra en la lista`);
}