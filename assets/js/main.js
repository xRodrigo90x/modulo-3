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


enviarGasto.addEventListener("click", () => {
    
    tbody.innerHTML = `
    <zt
        <tr>
            <th scope="row">${gastoInput.value}</th>
            <td>${cantidadInput.value}</td>
            <td><button  class="bi bi-trash"></button></td>
        </tr>
    </ztr>
        `                       
});