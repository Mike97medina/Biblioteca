import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSuccess(message: string) {
    Swal.fire({
      title: 'Éxito',
      text: message,
      icon: 'success',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  showError(message: string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  showWarning(message: string) {
    Swal.fire({
      title: 'Advertencia',
      text: message,
      icon: 'warning',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  showInfo(message: string) {
    Swal.fire({
      title: 'Información',
      text: message,
      icon: 'info',
      position: 'top-end',
      toast: true,
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
