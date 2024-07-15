document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = registroForm.querySelector('input[type="text"]').value;
        const autor = registroForm.querySelector('input[type="text"]').value;
        const editorial = registroForm.querySelector('input[type="text"]').value;
        const fecha = registroForm.querySelector('input[type="date"]').value;

        let error = false;

        if (!titulo || !titulo || !autor || !editorial || !fecha) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos',
                icon: 'error',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            });
            error = true;
        } 

        if (!error) {
            Swal.fire({
                title: 'Éxito',
                text: 'Registro exitoso',
                icon: 'success',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                // Redirige al usuario o realiza otra acción después de 3 segundos
                window.location.href = 'books.html';
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroFormEdit");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const titulo = registroForm.querySelector('input[type="text"]').value;
        const autor = registroForm.querySelector('input[type="text"]').value;
        const editorial = registroForm.querySelector('input[type="text"]').value;
        const fecha = registroForm.querySelector('input[type="date"]').value;

        let error = false;

        if (!titulo || !titulo || !autor || !editorial || !fecha) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos',
                icon: 'error',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            });
            error = true;
        } 

        if (!error) {
            Swal.fire({
                title: 'Éxito',
                text: 'Registro exitoso',
                icon: 'success',
                position: 'top-end',
                toast: true,
                showConfirmButton: false,
                timer: 3000,
            }).then(() => {
                // Redirige al usuario o realiza otra acción después de 3 segundos
                window.location.href = 'books.html';
            });
        }
    });
});
