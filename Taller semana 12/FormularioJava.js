const registroForm = document.querySelector('#registroForm')
registroForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const nombre = document.getElementById("myname").value
  const cedula = document.getElementById("cedula").value
  const apellidos = document.getElementById("surname").value
  const correo = document.getElementById("email").value
  const celular = document.getElementById("mobile").value
  const direccion = document.getElementById("direccion").value
  const fecha = document.getElementById("fecha").value
  const terminos = document.getElementById("terminos").value
  const form = document.getElementById("form").value
  const listInputs = document.querySelectorAll(".form-input").value

  const Clientes = JSON.parse(localStorage.getItem('Clientes')) || []
  const isClienteRegistered = Clientes.find(Clientes => Clientes.cedula === cedula)
  if (isClienteRegistered){
    return alert('El Cliente ya esta registrado!')
  }

  Clientes.push({ cedula: cedula, apellidos: apellidos, nombres: nombres, direccion: direccion, celular: celular, 
    correo: correo, fecha: fecha})
  localStorage.setItem('Clientes', JSON.stringify(Clientes))
  alert('Registro Exitoso!')
  window.location.href= 'Taller2_Formulario.html'
})

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

document.addEventListener('DOMContentLoaded', function() {
  // Validación para el campo de nombres
  document.getElementById('myname').addEventListener('input', function() {
      let input = this.value;
      const errorMessage = document.getElementById('error-message-name');

      // Verifica si hay caracteres no permitidos
      if (/[^a-zA-Z\s]/.test(input)) {
          errorMessage.style.display = 'block';
      } else {
          errorMessage.style.display = 'none';
      }

      // Elimina cualquier carácter no permitido
      this.value = input.replace(/[^a-zA-Z\s]/g, '');
  });

  // Validación para el campo de teléfono
  document.getElementById('mobile').addEventListener('input', function() {
      let input = this.value;
      const errorMessage = document.getElementById('error-message-mobile');

      // Verifica si hay caracteres no permitidos o la longitud excede los 10 caracteres
      if (/[^0-9]/.test(input) || input.length > 10) {
          errorMessage.style.display = 'block';
      } else {
          errorMessage.style.display = 'none';
      }

      // Elimina cualquier carácter no permitido y restringe la longitud a 10 caracteres
      this.value = input.replace(/[^0-9]/g, '').slice(0, 10);
  });
});
