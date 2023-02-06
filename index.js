function calculadoraSuma(operacion,op1,op2,op3){

  let resultadoSuma;

  if( operacion == "sum"){
    resultadoSuma = op1 + op2 + op3
  }

  return resultadoSuma
}
console.log(calculadoraSuma("sum",1,2,3))



function calculadoraResta(operacion,op1,op2){

  let resultadoResta;

  if( operacion == "subst"){
    resultadoResta = op1 - op2
  }

  return resultadoResta
} 



function calculadoraMultiplicacion(operacion,op1,op2){

  let resultadoMult;

  if( operacion == "mult"){
    resultadoMult = op1 * op2
  }

  return resultadoMult
}



function calculadoraDivision(operacion,op1,op2){

  let resultadoDiv;

  if( operacion == "div"){
    resultadoDiv = op1 / op2
  }

  return resultadoDiv
}

function cuadrado (numero){
  let resultado = numero*numero
  return resultado
}



module.exports = {calculadoraSuma,calculadoraResta,calculadoraMultiplicacion,calculadoraDivision}