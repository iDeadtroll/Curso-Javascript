/**
 * Ejercicio:
 * hacer que al dar click sobre el campo que se va a escribir se limpies su contenido.
 * Todo reutiliando en una sola función.
 */
function pageLoaded() {
    console.log("página cargada");
}

function result() {
    const documentoValor1 = document.getElementById("valor1").value;
    const operationInput = document.getElementById("oper").value;
    const documentoValor2 = document.getElementById("valor2").value;

    const val1 = Number(documentoValor1);
    const val2 = Number(documentoValor2);
    let resultado = 0;

    if(operationInput === "") {
        alert("Elija una operación");
        return true;
    }


   switch(operationInput){
       case "+":
        resultado = suma(val1, val2);
           break;
        case "-":
        resultado = resta(val1, val2);
            break;
        case "x":
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

function limpiarInputValor1() {
    document.getElementById("valor1").value = "";
}