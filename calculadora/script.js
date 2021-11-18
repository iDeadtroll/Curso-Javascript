var val1 = 0;
var val2 = 0;
/*
// console.log(val1 + val2);
// console.log(val1 - val2);
// console.log(val1 * val2);
// console.log(val1 / val2);
*/
function myFuncion() {
    var documentoValor1 = document.getElementById("valor1").value;
    var documentoValor2 = document.getElementById("valor2").value;
    console.log(documentoValor1);
    console.log(documentoValor2);

    val1 = Number(documentoValor1);
    val2 = Number(documentoValor2);

    var resultado = resta(val1, val2);
    console.log(resultado);

    document.getElementById("result").textContent += resultado;

}

function suma(value1, value2) {
    return value1 + value2;
}

function resta(value1, value2) {
    return value1 - value2;
}