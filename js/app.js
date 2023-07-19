let ciudades = [];

while (true) {
  let ciudad = prompt('Ingresa el nombre de una ciudad (o selecciona Cancelar para terminar):');

  if (ciudad === null) {
    break;
  } else if
   (!isNaN(ciudad)) {
    alert("Por favor, ingresa un nombre de ciudad válido.");
    continue;
  }

  ciudades.push(ciudad);
}

console.log('El arreglo generado es:', ciudades);
console.log('La longitud del arreglo es:', ciudades.length);

console.log('Las ciudades ingresadas son:');
for (let i = 0; i < ciudades.length; i++) {
  console.log(ciudades[i]);
}
