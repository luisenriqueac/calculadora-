const pantalla = document.getElementById("pantalla");
let operacion = "";

function agregarNumero(numero) {
    operacion += numero;
    pantalla.value = operacion;
}

function agregarOperador(operador) {
    
    if (operacion !== "" && !isNaN(operacion.slice(-1))) {
        operacion += operador;
        pantalla.value = operacion;
    }
}

function borrar() {
    operacion = "";
    pantalla.value = "";
}

function calcular() {
    try {
        
        operacion = eval(operacion); 
        pantalla.value = operacion;
    } catch (error) {
        pantalla.value = "Error";
    }
}

function borrarUltimo() {
    if(operacion.length > 0) {
        operacion = operacion.slice(0, -1);
        pantalla.value = operacion;
    }
}
function agregarPunto(punto) {
    const pantalla =
    document.getElementById("pantalla");
    if (!pantalla.value.includes("."))
    {
        if (pantalla.value === "") {
            pantalla.value = "0.";
        } else{
            pantalla.value += "."
        }
    }
}
