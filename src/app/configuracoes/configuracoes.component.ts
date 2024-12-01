import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.css'],
    standalone: false
})
export class ConfiguracoesComponent {

  constructor(private authService: AuthService, private router: Router) {}

  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

    // Método para chamar o logout
    onLogout(): void {
      this.authService.logout();  // Remove o ID do aluno do localStorage
      this.router.navigate(['/login']);  // Redireciona o usuário para a tela de login
    }
}