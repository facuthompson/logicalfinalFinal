


function calculaPorcentajes(numero) {
    document.getElementById("cuota03").value = Math.floor(numero * 42) / 100;
    document.getElementById("cuota06").value = Math.floor(numero * 25) / 100;
    document.getElementById("cuota09").value = Math.floor(numero * 18) / 100;
    document.getElementById("cuota12").value = Math.floor(numero * 21) / 100;
}
function calcularCuotas(event) {
    event.preventDefault();

    // Obtener el monto ingresado por el usuario
    let monto = parseFloat(document.getElementById("monto").value);

    // Calcular los recargos
    let cuota3 = (monto * 1.25) / 3; // 25%
    let cuota6 = (monto * 1.50) / 6; // 50% 
    let cuota9 = (monto * 1.75) / 9; // 75% 
    let cuota12 = (monto * 2.20) / 12; // 120%

    // Mostrar los resultados
    document.getElementById("cuota3").textContent = cuota3.toFixed(2);
    document.getElementById("cuota6").textContent = cuota6.toFixed(2);
    document.getElementById("cuota9").textContent = cuota9.toFixed(2);
    document.getElementById("cuota12").textContent = cuota12.toFixed(2);

    // Mostrar el contenedor de resultados
    document.getElementById("resultados").classList.remove('d-none');
}




function calcularInteresCompuesto(event) {
    event.preventDefault();

    // Ocultar la alerta de error al iniciar el cálculo
    let alertaError = document.getElementById("alertaError");
    alertaError.classList.add("d-none");
    alertaError.innerHTML = ""; // Limpiar mensaje previo

    // Obtener los valores ingresados por el usuario
    let cuota = parseFloat(document.getElementById("cuota").value);
    let tasaInteres = 0.005; // Tasa de interés diaria fija (0.5%)
    let fechaVencimiento = new Date(document.getElementById("fechaVencimiento").value);

    // Calcular la diferencia en días desde la fecha de vencimiento hasta hoy
    let fechaActual = new Date();
    let diasRetraso = Math.floor((fechaActual - fechaVencimiento) / (1000 * 60 * 60 * 24)); // Diferencia en milisegundos a días

    // Verificar si la fecha de vencimiento es posterior a la fecha actual
    if (fechaVencimiento > fechaActual) {
        alertaError.innerHTML = "La fecha de vencimiento es posterior a la fecha actual. Por favor, elige una fecha válida.";
        alertaError.classList.remove("d-none");
        return;
    }

    // Verificar si han pasado más de 90 días
    if (diasRetraso > 90) {
        alertaError.innerHTML = "Han pasado más de 90 días desde la fecha de tu primer vencimiento. Por favor, comunícate al teléfono: <strong>341-6365506</strong>.";
        alertaError.classList.remove("d-none");
        return;
    }

    // Calcular el interés compuesto: A = P (1 + r)^t
    let montoFinal = cuota * Math.pow((1 + tasaInteres), diasRetraso);

    // Mostrar el resultado redondeado a dos decimales
    document.getElementById("resultado").innerHTML = `Tu cuota al al día de hoy: $${montoFinal.toFixed(2)} (llevas ${diasRetraso} días de atraso)`;
};