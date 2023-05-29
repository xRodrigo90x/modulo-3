// Variables globales
let presupuesto = 0;
let gastos = [];

// Obtener elementos del DOM
const presupuestoInput = document.getElementById('presupuestoInput');
const cantidadPresupuesto = document.getElementById('cantidadPresupuesto');
const enviarPresupuesto = document.getElementById('enviarPresupuesto');
const gastoInput = document.getElementById('gastoInput');
const cantidadInput = document.getElementById('cantidadInput');
const enviarGasto = document.getElementById('enviarGasto');
const tbody = document.getElementById('tbody');
const gastosTotal = document.getElementById('gastosTotal');
const saldoActual = document.getElementById('saldoActual');

// Función para manejar el evento de clic en "Calcular" del presupuesto
const inputPresupuesto = () => {
  // Obtener el valor del presupuesto ingresado por el usuario
  const valorPresupuesto = parseFloat(presupuestoInput.value);

  if (!isNaN(valorPresupuesto) && valorPresupuesto > 0) {
    // Asignar el presupuesto y mostrarlo en el elemento correspondiente del DOM
    presupuesto = valorPresupuesto;
    cantidadPresupuesto.textContent = presupuesto.toFixed(2);

    // Habilitar el formulario de gastos
    gastoInput.disabled = false;
    cantidadInput.disabled = false;
    enviarGasto.disabled = false;
  } else {
    alert('Por favor, ingresa un valor válido para el presupuesto.');
  }

  // Limpiar los campos de entrada
  presupuestoInput.value = '';
};

// Función para manejar el evento de clic en "Añadir Gasto"
const inputGasto = () => {
  // Obtener el nombre y el valor del gasto ingresado por el usuario
  const nombreGasto = gastoInput.value.trim();
  const valorGasto = parseFloat(cantidadInput.value);

  if (nombreGasto !== '' && !isNaN(valorGasto) && valorGasto > 0) {
    // Crear un objeto de gasto
    const gasto = {
      nombre: nombreGasto,
      valor: valorGasto.toFixed(2),
    };

    // Agregar el gasto al arreglo de gastos
    gastos.push(gasto);

    // Mostrar los gastos en la tabla
    mostrarGastos();

    // Calcular y mostrar el saldo actual
    calcularSaldo();

    // Limpiar los campos de entrada
    gastoInput.value = '';
    cantidadInput.value = '';
  } else {
    alert('Por favor, ingresa un nombre y un valor válido para el gasto.');
  }
};

// Función para mostrar los gastos en la tabla
const mostrarGastos = () => {
  // Limpiar el contenido previo de la tabla
  tbody.innerHTML = '';

  // Recorrer el arreglo de gastos y crear las filas de la tabla
  for (let i = 0; i < gastos.length; i++) {
    const fila = document.createElement('tr');

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = gastos[i].nombre;

    const celdaValor = document.createElement('td');
    celdaValor.textContent = `$ ${gastos[i].valor}`;

    const celdaEliminar = document.createElement('td');
    const iconoEliminar = document.createElement('i');
    iconoEliminar.classList.add('bi', 'bi-trash');
    iconoEliminar.addEventListener('click', () => eliminarGasto(i));

    celdaEliminar.appendChild(iconoEliminar);

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaValor);
    fila.appendChild(celdaEliminar);

    tbody.appendChild(fila);
  }
};

// Función para eliminar un gasto
const eliminarGasto = (indice) => {
  // Eliminar el gasto del arreglo de gastos
  gastos.splice(indice, 1);

  // Mostrar nuevamente los gastos en la tabla
  mostrarGastos();

  // Calcular y mostrar el saldo actual
  calcularSaldo();
};

// Función para calcular y mostrar el saldo actual
const calcularSaldo = () => {
  // Calcular el total de los gastos
  const totalGastos = gastos.reduce((total, gasto) => total + parseFloat(gasto.valor), 0);

  // Mostrar el total de los gastos
  gastosTotal.textContent = totalGastos.toFixed(2);

  // Calcular el saldo actual
  const saldo = presupuesto - totalGastos;

  // Mostrar el saldo actual
  saldoActual.textContent = saldo.toFixed(2);
};

// Asignar manejadores de eventos
enviarPresupuesto.addEventListener('click', inputPresupuesto);
enviarGasto.addEventListener('click', inputGasto);