"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this._size=0
  this.left = null
  this.right = null
  
}

BinarySearchTree.prototype.size = function(){
  if(!this.left && !this.right)return 1
  if(!this.left) return 1 + this.right.size()
  if(!this.right) return 1 + this.left.size()
  if(this.left && this.right) return 1 + this.right.size() + this.left.size()

}

BinarySearchTree.prototype.insert = function(value){ 
  if(!this.left && this.value>value){ 
    this.left=new BinarySearchTree(value)
  }else if(!this.right && this.value<value){ 
    this.right=new BinarySearchTree(value)
  }else{
    if(this.value>value)return this.left.insert(value)
    if(this.value<value)return this.right.insert(value)
  }  
} 

BinarySearchTree.prototype.contains = function(value){
  if(this.value===value)return true
  
  if(value > this.value){
    if(!this.right){
      return false
    }else{
      return this.right.contains(value)
    }
  }else{
    if(!this.left){
      return false
    }else{
      return this.left.contains(value)
    }
  }
}


BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(!order || order === "in-order"){
    this.left && this.left.depthFirstForEach(cb,order) // es como un if
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb,order)
  }else if(order === "post-order"){
    this.left && this.left.depthFirstForEach(cb,order) // es como un if
    this.right && this.right.depthFirstForEach(cb,order)
    cb(this.value)
  }else{
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb,order)
    this.right && this.right.depthFirstForEach(cb,order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  if(this.left){
    array.push(this.left)
  }
  if(this.right){
    array.push(this.right)
  }
  cb(this.value)
  if(array.length>0){
    array.shift().breadthFirstForEach(cb, array)
  }
}



//[15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
/*
const t = new BinarySearchTree(20)
// console.log('//aqui primero//' , t)
t.insert(15)
// console.log('//aqui entra 15//:' , t)
t.insert(25)
t.insert(5)
// console.log('//aqui entra 25//:' , t)
t.insert(17)
// console.log('//aqui entra 17//:' , t)
t.insert(21)
t.insert(28)

console.log('//aqui entra 21//:' , t)
console.log("=================================================================")


console.log('//aqui entra 21//:' , t.contains(5))
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
