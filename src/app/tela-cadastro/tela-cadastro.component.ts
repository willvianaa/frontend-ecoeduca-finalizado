import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent {

  // Dados do formulário de login
  loginData = {
    email: '',
    senha: ''
  };

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  // Método que será chamado ao clicar no botão de login
  onSubmit(): void {

    // Usando os dados do formulário
    const email = this.loginData.email;
    const senha = this.loginData.senha;
    
    this.authService.login(email, senha).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
        // Salva o ID do usuário e redireciona para a página principal
        this.authService.salvarIdAluno(response.idAluno);  
        this.router.navigate(['/home']);  
      },
      error => {
        console.error('Erro de login', error);
        // Aqui você pode mostrar um erro para o usuário
      }
    );
  }
}
