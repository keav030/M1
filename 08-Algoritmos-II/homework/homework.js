'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array
  let pivot = array.length-1
  let left = []
  let right = []
  for (let i = 0; i < array.length; i++) {
    if (i!== pivot) {
      if (array[i] < array[pivot]) {
        left.push(array[i])
      }else{
        right.push(array[i])
      }
    }
  }
  const result = quickSort(left).concat(array[pivot]).concat(quickSort(right))
  return result
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1)return array
  let mediumArray = Math.floor(array.length/2)
  let left = array.slice(0, mediumArray)
  let right = array.slice(mediumArray)
  return merge(mergeSort(left),mergeSort(right)) 

}

function merge(left, right){  
  let result = []
  let indexLeft = 0
  let indexRight = 0
  while (indexLeft<left.length && indexRight<right.length ) {
    if(left[indexLeft]<right[indexRight]){
      result.push(left[indexLeft])
      indexLeft++
    }else{
      result.push(right[indexRight])
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
