const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const direccion = document.getElementById("direccion");
const fecha = document.getElementById("fecha");
const terminos = document.getElementById("terminos");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Ingrese sus Nombres y Apellidos");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Ingrese sus Apellidos");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Ingrese su Correo");
    condicion = false;
  }
  if (
    celular.value.length != 9 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) 
  if (direccion.value.length < 1 || direccion.value.trim() == "") {
    mostrarMensajeError("direccion", "Ingrese su Direccion");
    condicion = false;
  }
  if (fecha.value.length <1 || fecha.value.trim()== "") {
    mostrarMensajeError("fecha", "Porfavor ponga su fecha de Nacimiento");
    condicion = false;
  }
  if (!terminos.checked) {
    mostrarMensajeError("terminos", "Acepte los Terminos");
    condicion = false;
  } else {
    mostrarMensajeError("terminos", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = " Gracias por Registrarse..";
  
}

// Obtener referencia al input de la cédula
const inputCedula = document.getElementById('cedula');
const errorCedula = document.getElementById('errorCedula');

// Función para manejar el evento de entrada en el input
inputCedula.addEventListener('input', () => {
    const valor = inputCedula.value;

    // Validar si el valor contiene letras
    if (!/^\d*$/.test(valor)) {
        errorCedula.textContent = 'Solo se permiten números.';
        inputCedula.value = ''; // Limpiar el valor del input
    } else {
        errorCedula.textContent = ''; // Limpiar el mensaje de error si es válido
    }
});