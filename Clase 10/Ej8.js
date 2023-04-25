function Vocal(palabras) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    const EmpiezanConVocal = palabras.filter(palabra => vocales.includes(palabra[0].toLowerCase()));
    return EmpiezanConVocal;
  }
  
  const palabras = ['azul', 'verde', 'rojo', 'amarillo', 'naranja', 'rosa', 'blanco'];
  const Vocales = Vocal(palabras);
  console.log(Vocales); 