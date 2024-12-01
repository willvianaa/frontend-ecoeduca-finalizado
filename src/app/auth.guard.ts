import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';  // Supondo que você tenha um AuthService para gerenciar autenticação

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    // Verifica se o usuário está logado
    if (this.authService.isLoggedIn()) {
      return true;  // O usuário pode acessar a rota
    } else {
      // Se não estiver logado, redireciona para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
