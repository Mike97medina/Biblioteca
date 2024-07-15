import { Component, OnInit,AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  registroForm: FormGroup;
  registroFormEdit: FormGroup;

  constructor(
    private titleService: Title,
    private alertService: AlertService,
    private fb: FormBuilder
  ) { 
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      contraseña: new FormControl('', [Validators.required])
    });

    this.registroFormEdit = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      contraseña: new FormControl('', [Validators.required])

    });

  }

  ngOnInit(): void {
    this.titleService.setTitle(' Recuperar contraseña | Biblioteca ULEAM ');
  }
  onSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{4,15}$/;
    const telefonoRegex = /^\d{10}$/;

    const nombre = this.registroForm.get('nombre')?.value;
    const email = this.registroForm.get('email')?.value;
    const password = this.registroForm.get('contraseña')?.value;
    const telefono = this.registroForm.get('telefono')?.value;

    let error = false;
    if (!nombre || !email || !password || !telefono) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } else {
      if (!emailRegex.test(email)) {
        this.alertService.showError('Por favor, ingrese un correo válido');
        error = true;
      }

      if (!passwordRegex.test(password)) {
        this.alertService.showError('La contraseña debe tener entre 4 y 15 caracteres');
        error = true;
      }

      if (!telefonoRegex.test(telefono)) {
        this.alertService.showError('El número de teléfono debe contener 10 dígitos numéricos');
        error = true;
      }
    }

    if (!error) {
      this.alertService.showSuccess('Usuario registrado correctamente');
    }

  }
  onSubmit_edit(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{4,15}$/;
    const telefonoRegex = /^\d{10}$/;

    const nombre = this.registroFormEdit.get('nombre')?.value;
    const email = this.registroFormEdit.get('email')?.value;
    const password = this.registroFormEdit.get('contraseña')?.value;
    const telefono = this.registroFormEdit.get('telefono')?.value;
    
    let error = false;
    if (!nombre || !email || !password || !telefono) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } else {
      if (!emailRegex.test(email)) {
        this.alertService.showError('Por favor, ingrese un correo válido');
        error = true;
      }

      if (!passwordRegex.test(password)) {
        this.alertService.showError('La contraseña debe tener entre 4 y 15 caracteres');
        error = true;
      }

      if (!telefonoRegex.test(telefono)) {
        this.alertService.showError('El número de teléfono debe contener 10 dígitos numéricos');
        error = true;
      }
    }

    if (!error) {
      this.alertService.showSuccess('Usuario actualizado correctamente');
    }
  }


}
