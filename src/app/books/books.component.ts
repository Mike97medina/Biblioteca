import { Component, OnInit,AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AlertService } from '../services/alert.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  registroForm: FormGroup;
  registroFormEdit: FormGroup;
  constructor(private titleService: Title, private alertService: AlertService) { 
    this.registroForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      editorial: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),

    });

    this.registroFormEdit = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      editorial: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(' Libros | Biblioteca ULEAM ');
  }
  onSubmit() {
    const titulo = this.registroForm.get('titulo')?.value;
    const autor = this.registroForm.get('autor')?.value;
    const editorial = this.registroForm.get('editorial')?.value;
    const fecha = this.registroForm.get('fecha')?.value;

    let error = false;
    if (!titulo || !autor || !editorial || !fecha) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } 
    if (!error) {
      this.alertService.showSuccess('Registro exitoso');
    }
  }
  onSubmit_edit(){
    const titulo = this.registroFormEdit.get('titulo')?.value;
    const autor = this.registroFormEdit.get('autor')?.value;
    const editorial = this.registroFormEdit.get('editorial')?.value;
    const fecha = this.registroFormEdit.get('fecha')?.value;

    let error = false;
    if (!titulo || !autor || !editorial || !fecha) {
      this.alertService.showError('Por favor, complete todos los campos');
      error = true;
    } 
    if (!error) {
      this.alertService.showSuccess('libro actualizado');
    }
  }

  
}
