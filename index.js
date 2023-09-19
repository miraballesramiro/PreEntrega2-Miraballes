const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.item3.sign');
const equals = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.textContent;
        if (isFirstValue === false) {
            getFirstValue(atr);
        }
        if (isSecondValue == false) {
            getSecondValue(atr);
        }
    });
}


function getNumber() {
    return paraseFloat(prompt("Ingrese un número:"));
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero.";
    }
}

function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
}

const operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /, %):");

switch (operacion) {
    case "+":
        const numero1 = getNumber();
        const numero2 = getNumber();
        const resultadoSuma = sumar(numero1, numero2);
        alert('El resultado de la suma es: ${resultadoSuma}');
        break;
    case "-":
        const minuendo = getNumber();
        const sustraendo = getNumber();
        const resultadoResta = restar(minuendo, sustraendo);
        alert('El resultado de la multiplicación es: ${resultadoMultiplicacion}');
        break;
    case "/":
        const dividendo = getNumber();
        const divisor = getNumber ();
        const resultadoDivision = dividir(dividiendo, divisor);
        alert(resultadoDivision);
        break;
    case "%":
        const numero = getNumber();
        const porcentaje = getNumber();
        const resultadoPorcentaje = calcularPorcentaje(numero, porcentaje);
        alert('El ${porcentaje}% de ${numero} es: ${ressultadoPorcentaje}');
        break;
    default:
        alert("Operación no válida.");
        break;
}