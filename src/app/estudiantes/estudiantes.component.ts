import { Component, OnInit,AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent implements OnInit {
  registroForm: FormGroup;
  registroFormEdit: FormGroup;
  constructor(private titleService: Title,private alertService: AlertService,
  ) { 
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      facultad: new FormControl('', [Validators.required]),
      carrera: new FormControl('', [Validators.required])

    });

    this.registroFormEdit = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      facultad: new FormControl('', [Validators.required]),
      carrera: new FormControl('', [Validators.required])

    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(' Estudiantes | Biblioteca ULEAM ');
  }

  onSubmit(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telefonoRegex = /^\d{10}$/;

    const nombre = this.registroForm.get('nombre')?.value;
    const email = this.registroForm.get('email')?.value;
    const telefono = this.registroForm.get('telefono')?.value;
    const facultad = this.registroForm.get('facultad')?.value;
    const carrera = this.registroForm.get('carrera')?.value;

    let error = false;
    if (!nombre || !email || !telefono || !facultad || !carrera) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } else {
      if (!emailRegex.test(email)) {
        this.alertService.showError('El email no es válido');
        error = true;
      }
      if (!telefonoRegex.test(telefono)) {
        this.alertService.showError('El teléfono no es válido');
        error = true;
      }
    }
    if(!error){
      this.alertService.showSuccess('Registro exitoso');
    }

  }
  onSubmit_edit(){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telefonoRegex = /^\d{10}$/;

    const nombre = this.registroFormEdit.get('nombre')?.value;
    const email = this.registroFormEdit.get('email')?.value;
    const telefono = this.registroFormEdit.get('telefono')?.value;
    const facultad = this.registroFormEdit.get('facultad')?.value;
    const carrera = this.registroFormEdit.get('carrera')?.value;

    let error = false;
    if (!nombre || !email || !telefono || !facultad || !carrera) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } else {
      if (!emailRegex.test(email)) {
        this.alertService.showError('El email no es válido');
        error = true;
      }
      if (!telefonoRegex.test(telefono)) {
        this.alertService.showError('El teléfono no es válido');
        error = true;
      }
    }
    if(!error){
      this.alertService.showSuccess('Registro exitoso');
    }
  }
}
