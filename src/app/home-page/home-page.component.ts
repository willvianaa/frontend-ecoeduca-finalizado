import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  // Propriedade que armazena os dados das seções
  sections = [
    {
      title: 'Reciclagem de lixo',
      // icon:'https://www.flaticon.com/free-icons/recycle-bin'
    },
    {
      title: 'Histórias ecológicas',
      // icon: 'https://img.icons8.com/fluency/48/000000/book.png',
    },
    {
      title: 'Mapa de Coleta',
      // icon: 'https://img.icons8.com/fluency/48/000000/garbage-truck.png',
    },
    {
      title: 'Desafios da Reciclagem',
      // icon: 'https://img.icons8.com/fluency/48/000000/garbage-truck.png',
    },
  ];

  constructor(private router: Router) {}

abrirPerfilUsuario(): void {
  this.router.navigate(['/user-profile']);
}

  }
