'use strict'

function BinarioADecimal(num) {
  var numS = num.toString();
  var result = 0
  var exp = 0
  for(var  i = numS.length-1 ; i>=0 ; i--){
    if(numS[i] == "1"){
      result = result + Math.pow(2, exp)
    }
    exp++
  }
  return result
}

function DecimalABinario(num) {
  var result = num
  var mod = [];

  while(result >= 1){
    mod.push(result%2)
    result=Math.floor(result/2)
  }
  return mod.reverse().toString().replace(/,/g,"")
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}