import { Component, OnInit,AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
declare var $: any;


@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent implements OnInit {
  registroForm: FormGroup;
  registroFormEdit: FormGroup;
  constructor(private titleService: Title, private alertService: AlertService) { 
    this.registroForm = new FormGroup({
      estudiante: new FormControl('', [Validators.required]),
      libro: new FormControl('', [Validators.required]),
      fecha_alquiler: new FormControl('', [Validators.required]),
      fecha_devolucion: new FormControl('', [Validators.required]),

    });

    this.registroFormEdit = new FormGroup({
      estudiante: new FormControl('', [Validators.required]),
      libro: new FormControl('', [Validators.required]),
      fecha_alquiler: new FormControl('', [Validators.required]),
      fecha_devolucion: new FormControl('', [Validators.required]),

    });
  }
  ngOnInit(): void {
    this.titleService.setTitle(' Renta de Libro | Biblioteca ULEAM ');
  }
  onSubmit(){
    const estudiante = this.registroForm.get('estudiante')?.value;
    const libro = this.registroForm.get('libro')?.value;
    const fecha_alquiler = this.registroForm.get('fecha_alquiler')?.value;
    const fecha_devolucion = this.registroForm.get('fecha_devolucion')?.value;

    let error = false;

    if (!estudiante || !libro || !fecha_alquiler || !fecha_devolucion) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    }

    if (fecha_devolucion && new Date(fecha_alquiler) > new Date(fecha_devolucion)) {
      this.alertService.showError('La fecha de devolución debe ser posterior a la fecha de alquiler');
      error = true;
    }

    if (!error) {
      this.alertService.showSuccess('Registro exitoso');
      $('#addEmployeeModal').modal('hide');

    }
  }
  onSubmit_edit(){
    const estudiante = this.registroFormEdit.get('estudiante')?.value;
    const libro = this.registroFormEdit.get('libro')?.value;
    const fecha_alquiler = this.registroFormEdit.get('fecha_alquiler')?.value;
    const fecha_devolucion = this.registroFormEdit.get('fecha_devolucion')?.value;

    let error = false;

    if (!estudiante || !libro || !fecha_alquiler || !fecha_devolucion) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    }

    if (fecha_devolucion && new Date(fecha_alquiler) > new Date(fecha_devolucion)) {
      this.alertService.showError('La fecha de devolución debe ser posterior a la fecha de alquiler');
      error = true;
    }

    if (!error) {
      this.alertService.showSuccess('Registro exitoso');
      $('#addEmployeeModal').modal('hide');

    }
  }
}
