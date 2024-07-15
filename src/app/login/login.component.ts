import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterOutlet],  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('btnRegistrarse') btnRegistrarse!: ElementRef;
  @ViewChild('btnIniciarSesion') btnIniciarSesion!: ElementRef;
  @ViewChild('nombreApellido') nombreApellido!: ElementRef;
  @ViewChild('numeroCedula') numeroCedula!: ElementRef;
  @ViewChild('registrationForm') registrationForm!: ElementRef;

  contenedorLoginRegister!: HTMLElement;
  formularioLogin!: HTMLElement;
  formularioRegister!: HTMLElement;
  cajaTraseraLogin!: HTMLElement;
  cajaTraseraRegister!: HTMLElement;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.contenedorLoginRegister = this.el.nativeElement.querySelector('.contenedor-login-register');
    this.formularioLogin = this.el.nativeElement.querySelector('.formulario-login');
    this.formularioRegister = this.el.nativeElement.querySelector('.formulario-register');
    this.cajaTraseraLogin = this.el.nativeElement.querySelector('.caja-trasera-login');
    this.cajaTraseraRegister = this.el.nativeElement.querySelector('.caja-trasera-register');
  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.btnRegistrarse.nativeElement, 'click', () => this.register());
    this.renderer.listen(this.btnIniciarSesion.nativeElement, 'click', () => this.iniciarSesion());
    this.renderer.listen(window, 'resize', () => this.anchoPagina());
    
    this.renderer.listen(this.nombreApellido.nativeElement, 'input', (event: any) => {
      const input = event.target;
      input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });

    this.renderer.listen(this.numeroCedula.nativeElement, 'input', (event: any) => {
      const input = event.target;
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    });

    this.renderer.listen(this.registrationForm.nativeElement, 'submit', (event: any) => {
      this.handleSubmit(event);
    });

    this.anchoPagina();
  }

  anchoPagina(): void {
    if (window.innerWidth > 850) {
      this.cajaTraseraLogin.style.display = 'block';
      this.cajaTraseraRegister.style.display = 'block';
    } else {
      this.cajaTraseraRegister.style.display = 'block';
      this.cajaTraseraRegister.style.opacity = '1';
      this.cajaTraseraLogin.style.display = 'none';
      this.formularioLogin.style.display = 'block';
      this.formularioRegister.style.display = 'none';
      this.contenedorLoginRegister.style.left = '0px';
    }
  }

  iniciarSesion(): void {
    if (window.innerWidth > 850) {
      this.formularioRegister.style.display = 'none';
      this.contenedorLoginRegister.style.left = '10px';
      this.formularioLogin.style.display = 'block';
      this.cajaTraseraRegister.style.opacity = '1';
      this.cajaTraseraLogin.style.opacity = '0';
    } else {
      this.formularioRegister.style.display = 'none';
      this.contenedorLoginRegister.style.left = '8px';
      this.formularioLogin.style.display = 'block';
      this.cajaTraseraRegister.style.display = 'block';
      this.cajaTraseraLogin.style.display = 'none';
    }
  }

  register(): void {
    if (window.innerWidth > 850) {
      this.formularioRegister.style.display = 'block';
      this.contenedorLoginRegister.style.left = '410px';
      this.formularioLogin.style.display = 'none';
      this.cajaTraseraRegister.style.opacity = '0';
      this.cajaTraseraLogin.style.opacity = '1';
    } else {
      this.formularioRegister.style.display = 'block';
      this.contenedorLoginRegister.style.left = '0px';
      this.formularioLogin.style.display = 'none';
      this.cajaTraseraRegister.style.display = 'none';
      this.cajaTraseraLogin.style.display = 'block';
      this.cajaTraseraLogin.style.opacity = '1';
    }
  }

  showPasswordMismatch: boolean = false;
  showFormError: boolean = false;

  handleSubmit(event: any): void {
    const form = event.target;
    const nombreApellido = (document.getElementById('nombreApellido') as HTMLInputElement).value.trim();
    const numeroCedula = (document.getElementById('numeroCedula') as HTMLInputElement).value.trim();
    const usuario = (document.getElementById('usuario') as HTMLInputElement).value.trim();
    const correoElectronico = (document.getElementById('correoElectronico') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    const passwordMismatch = document.getElementById('passwordMismatch') as HTMLElement;
    const formError = document.getElementById('formError') as HTMLElement;

    let isValid = true;

    if (!nombreApellido || !numeroCedula || !usuario || !correoElectronico || !password || !confirmPassword) {
      isValid = false;
    }

    if (password !== confirmPassword) {
      isValid = false;
      this.showPasswordMismatch = true;
    } else {
      this.showPasswordMismatch = false;
    }

    if (!isValid) {
      event.preventDefault();
      this.showFormError = true;
    } else {
      this.showFormError = false;
    }
  }
}