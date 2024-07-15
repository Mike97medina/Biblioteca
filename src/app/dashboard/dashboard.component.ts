import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(' Dashboard | Biblioteca ULEAM ');
  }
}
