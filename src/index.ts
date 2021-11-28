/*
Hacer un programa que dado un arreglo de enteros de 
tamaño 10 cargado por el usuario,
solicite al usuario un numero entero y 
reemplaze todas las ocurrencia del  numero en el
arreglo si existe por 0.
*/

let vector: number = new Array(10);
vector[0] = 1;
vector[1] = 1;
vector[2] = 22;
vector[3] = 33;
vector[4] = 44;
vector[5] = 55;
vector[6] = 66;
vector[7] = 77;
vector[8] = 88;
vector[9] = 99;

let numero: number;
numero = Number(prompt("Ingrese un número: "));
for (let i = 0; i < 10; i++) {
  if (vector[i] === numero) {
    vector[i] = 0;
  }
}

for (i = 0; i < 10; i++) {
  console.log(vector[i]);
}
