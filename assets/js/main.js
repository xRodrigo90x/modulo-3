let enviarPresupuesto = document.getElementById("enviarPresupuesto");
let cantidadPresupuesto = document.getElementById("cantidadPresupuesto");
let presupuestoInput = document.getElementById("presupuestoInput");
let cantidadBalance = document.getElementById("cantidadBalance");
let gastoInput = document.getElementById("gastoInput");
let cantidadInput = document.getElementById("cantidadInput");
let enviarGasto = document.getElementById("enviarGasto");

enviarPresupuesto.addEventListener("click", () => {

    cantidadPresupuesto.innerText = presupuestoInput.value
    cantidadBalance.innerHTML = presupuestoInput.value
});


let totalGastos = 0;
let saldoRestante = 0;

enviarGasto.addEventListener("click", () => {
    tbody.innerHTML += `
    <tr>
        <td>${gastoInput.value}</td>
        <td>${cantidadInput.value}</td>
        <td><button class="bi bi-trash basurero"></button></td>
    </tr>
    `;

    totalGastos += parseFloat(cantidadInput.value);
    document.getElementById("cantidadGasto").textContent = Math.max(0, parseInt(totalGastos));

    saldoRestante = parseInt(presupuestoInput.value) - totalGastos;
    document.getElementById("cantidadBalance").textContent = Math.max(0, saldoRestante);

    // Limpiar los campos gastoInput y cantidadInput
    gastoInput.value = "";
    cantidadInput.value = "";

    let basureros = Array.from(document.getElementsByClassName("basurero"));

    basureros.forEach((basurero) => {
        basurero.addEventListener("click", () => {
            let gastoRow = basurero.parentNode.parentNode;
            let gastoValue = parseFloat(gastoRow.children[1].textContent);

            gastoRow.remove();

            // Actualizar el total de gastos al eliminar un gasto
            totalGastos -= gastoValue;
            document.getElementById("cantidadGasto").textContent = Math.max(0, parseInt(totalGastos));

            // Actualizar el saldo restante al eliminar un gasto
            saldoRestante = parseInt(presupuestoInput.value) - totalGastos;
            document.getElementById("cantidadBalance").textContent = Math.max(0, saldoRestante);
        });
    });
});