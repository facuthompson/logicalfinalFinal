
function calcularCuotas(event) {
    event.preventDefault();

    let monto = parseFloat(document.getElementById("monto").value);

    let cuota3 = (monto * 1.25) / 3;
    let cuota6 = (monto * 1.50) / 6;
    let cuota9 = (monto * 1.75) / 9;
    let cuota12 = (monto * 2.20) / 12;


    document.getElementById("cuota3").textContent = cuota3.toFixed(2);
    document.getElementById("cuota6").textContent = cuota6.toFixed(2);
    document.getElementById("cuota9").textContent = cuota9.toFixed(2);
    document.getElementById("cuota12").textContent = cuota12.toFixed(2);


    document.getElementById("resultados").classList.remove('d-none');
}




function calcularInteresCompuesto(event) {
    event.preventDefault();

    let monto = parseFloat(document.getElementById("monto").value);
    let tasaInteres = 0.005;
    let fechaVencimiento = new Date(document.getElementById("fechaVencimiento").value);
    let fechaActual = new Date();
    let diasRetraso = Math.floor((fechaActual - fechaVencimiento) / (1000 * 60 * 60 * 24));


    let alertaError = document.getElementById("alertaError");
    let resultados = document.getElementById("resultados");
    alertaError.classList.add('d-none');
    alertaError.innerHTML = "";
    resultados.classList.add('d-none');


    if (diasRetraso < 0) {
        alertaError.classList.remove('d-none');
        alertaError.innerHTML = "La fecha de vencimiento es posterior a la fecha actual. Por favor, elige una fecha válida.";
        return;
    }


    if (diasRetraso > 90) {
        alertaError.classList.remove('d-none');
        alertaError.innerHTML = "Han pasado más de 90 días desde la fecha de tu primer vencimiento. Por favor, comunícate al teléfono: <strong>341-6365506</strong>";
        return;
    }
    

    let montoFinal = monto * Math.pow((1 + tasaInteres), diasRetraso);


    let interesAcumulado = montoFinal - monto;


    document.getElementById("diasMora").textContent = diasRetraso;
    document.getElementById("interesAcumulado").textContent = interesAcumulado.toFixed(2);
    document.getElementById("montoTotal").textContent = montoFinal.toFixed(2);

    resultados.classList.remove('d-none');
}

function abonar() {
    alert("GENIAL! ya estas al día sabias que puedes renovar tu crédito?");
}

function comunicarse() {
    alert("Por favor, comunícate al teléfono: <strong>341-6365506</strong> ");
}