document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const estudiante = registroForm.querySelector('input[name="estudiante"]').value;
        const libro = registroForm.querySelector('input[name="libro"]').value;
        const fecha_alquiler = registroForm.querySelector('input[name="fecha_alquiler"]').value;
        const fecha_devolucion = registroForm.querySelector('input[name="fecha_devolucion"]').value;

        let error = false;

        if (!estudiante || !libro || !fecha_alquiler || !fecha_devolucion) {
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

        if (fecha_devolucion && new Date(fecha_alquiler) > new Date(fecha_devolucion)) {
            Swal.fire({
                title: 'Error',
                text: 'La fecha de devolución debe ser posterior a la fecha de alquiler',
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
                // Cierra el modal Bootstrap
                $('#addRentalModal').modal('hide');
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroFormEdit");

    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const estudiante = registroForm.querySelector('input[name="estudiante"]').value;
        const libro = registroForm.querySelector('input[name="libro"]').value;
        const fecha_alquiler = registroForm.querySelector('input[name="fecha_alquiler"]').value;
        const fecha_devolucion = registroForm.querySelector('input[name="fecha_devolucion"]').value;

        let error = false;

        if (!estudiante || !libro || !fecha_alquiler || !fecha_devolucion) {
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

        if (fecha_devolucion && new Date(fecha_alquiler) > new Date(fecha_devolucion)) {
            Swal.fire({
                title: 'Error',
                text: 'La fecha de devolución debe ser posterior a la fecha de alquiler',
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
                // Cierra el modal Bootstrap
                $('#addRentalModal').modal('hide');
            });
        }
    });
});

