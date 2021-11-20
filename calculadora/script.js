/*
// console.log(val1 + val2);
// console.log(val1 - val2);
// console.log(val1 * val2);
// console.log(val1 / val2);
*/

function result() {
    const documentoValor1 = document.getElementById("valor1").value;
    const operationInput = document.getElementById("oper").value;
    const documentoValor2 = document.getElementById("valor2").value;

    const val1 = Number(documentoValor1);
    const val2 = Number(documentoValor2);
    let resultado = 0;


   switch(operationInput){
       case "+":
        resultado = suma(val1, val2);
           break;
        case "-":
        resultado = resta(val1, val2);
            break;
        case "*":
        resultado = multiplicar(val1, val2);
            break;
        case "/":
            if(val2 === 0) {
                resultado = "¡operación no válida!";
            } else {
                resultado = dividir(val1, val2);
            }
            break;
   }
    document.getElementById("result").textContent = resultado;

}

function suma(value1, value2) {
    return value1 + value2;
}

function resta(value1, value2) {
    return value1 - value2;
}
function multiplicar(val1, val2){
    return val1 * val2;
}
function dividir(val1, val2){
    return val1 / val2;
}

function operation(oper) {
    let caja = document.getElementById("oper");
    caja.value=oper;
}