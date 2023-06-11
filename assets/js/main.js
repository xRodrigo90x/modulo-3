let enviarPresupuesto = document.getElementById("enviarPresupuesto");
let cantidadPresupuesto = document.getElementById("cantidadPresupuesto");
let presupuestoInput = document.getElementById("presupuestoInput");
let cantidadBalance = document.getElementById("cantidadBalance");
let gastoInput = document.getElementById("gastoInput");
let cantidadInput = document.getElementById("cantidadInput");
let enviarGasto = document.getElementById("enviarGasto");
let tbody = document.getElementById("tbody");
let gastosArray = [];

enviarPresupuesto.addEventListener("click", () => {
    cantidadPresupuesto.innerText = presupuestoInput.value;
    cantidadBalance.innerHTML = presupuestoInput.value;
});

enviarGasto.addEventListener("click", () => {
    let gasto = gastoInput.value;
    let cantidad = parseFloat(cantidadInput.value);

    if (gasto && cantidad) {
        gastosArray.push({ gasto, cantidad });

        let fila = document.createElement("tr");
        let columnaGasto = document.createElement("td");
        columnaGasto.textContent = gasto;
        let columnaCantidad = document.createElement("td");
        columnaCantidad.textContent = cantidad;
        let columnaBasurero = document.createElement("td");
        let basurero = document.createElement("button");
        basurero.classList.add("bi", "bi-trash", "basurero");
        basurero.addEventListener("click", () => {
            eliminarGasto(fila);
        });

        columnaBasurero.appendChild(basurero);
        fila.appendChild(columnaGasto);
        fila.appendChild(columnaCantidad);
        fila.appendChild(columnaBasurero);
        tbody.appendChild(fila);

        actualizarTotales();
        gastoInput.value = "";
        cantidadInput.value = "";
    }
});

function actualizarTotales() {
    let totalGastos = 0;
    gastosArray.forEach((gasto) => {
        totalGastos += gasto.cantidad;
    });
    document.getElementById("cantidadGasto").textContent = totalGastos;

    let saldoRestante = parseInt(presupuestoInput.value) - totalGastos;
    document.getElementById("cantidadBalance").textContent = Math.max(0, saldoRestante);
}

function eliminarGasto(fila) {
    let index = Array.from(tbody.children).indexOf(fila);
    gastosArray.splice(index, 1);
    tbody.removeChild(fila);

    actualizarTotales();
}