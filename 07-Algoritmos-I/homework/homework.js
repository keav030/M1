'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  let arr = [1]
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  for (let i = 0; i <=num; i++) {
    let divs = 0
    for (let j = 0; j <=i; j++) {
      if(i%j===0)divs++
    }
    if(divs<=2){
      while(num%i===0 && i!==1){
        num=num/i
        arr.push(i) 
      }
    }
  }
  return arr
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i< array.length; i++) {
    let save=0
    for (let j = 0; j < array.length; j++) {
      if(array[j]>array[j+1]){
        save=array[j]
        array[j]=array[j+1]
        array[j+1]=save
      }
    }
  }
  return array
}




function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j= i-1
    let key=array[i]
    while(key<array[j] && j>=0){
      array[j+1]=array[j]
      j--
    }
    array[j+1]=key
  }
  return array 
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length; j++) {
    let min = array[j]
    for (let i = j; i < array.length; i++) {
      if(array[i]<min){
        min=array[i]
        array[i]=array[j]
        array[j]=min
      }
      console.log("min: ", min)
    } 
  }
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
