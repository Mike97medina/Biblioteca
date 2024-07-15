import { Routes } from '@angular/router';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { LoginComponent } from './login/login.component';
//
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AlquilerComponent } from './alquiler/alquiler.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path:'recuperar', component: RecuperarComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'books', component: BooksComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'estudiantes', component: EstudiantesComponent},
    
    {path: 'alquiler', component: AlquilerComponent},

    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir por defecto a '/login'
    { path: '**', redirectTo: '/login', pathMatch: 'full' },  // Manejar rutas desconocidas
];
