import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'ecoeduca2';

  usuarios = [
    { nome: 'Ana', pontos: 120 },
    { nome: 'João', pontos: 95 },
    { nome: 'Maria', pontos: 150 },
    { nome: 'Pedro', pontos: 110 },
    { nome: 'Luiza', pontos: 80 },
  ];
}

