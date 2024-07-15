document.getElementById("btn-registrarse").addEventListener("click", register);
document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);


//VARIABLES
var contenedor_login_register = document.querySelector(".contenedor-login-register");
var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var caja_trasera_login = document.querySelector(".caja-trasera-login");
var caja_trasera_register = document.querySelector(".caja-trasera-register");

document.getElementById('nombreApellido').addEventListener('input', function(event) {
    const input = event.target;
    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
});

document.getElementById('numeroCedula').addEventListener('input', function(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const form = event.target;
    const nombreApellido = document.getElementById('nombreApellido').value.trim();
    const numeroCedula = document.getElementById('numeroCedula').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const correoElectronico = document.getElementById('correoElectronico').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordMismatch = document.getElementById('passwordMismatch');
    const formError = document.getElementById('formError');
    
    let isValid = true;
    
    // Verificar si todos los campos están llenos
    if (!nombreApellido || !numeroCedula || !usuario || !correoElectronico || !password || !confirmPassword) {
        isValid = false;
    }
    
    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
        isValid = false;
        passwordMismatch.style.display = 'inline';
    } else {
        passwordMismatch.style.display = 'none';
    }

    // Mostrar mensaje de error si el formulario no es válido
    if (!isValid) {
        event.preventDefault();
        formError.style.display = 'inline';
    } else {
        formError.style.display = 'none';
    }
});



function anchoPagina(){
    if(window.innerWidth >850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarSesion(){
    if(window.innerWidth >850){
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "8px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register(){
    if(window.innerWidth >850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}
