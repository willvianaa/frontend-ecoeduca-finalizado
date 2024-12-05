import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  standalone: false,
})
export class TelaLoginComponent {
  nome: string = '';
  senha: string = '';

  // Objeto user que conterá os dados do formulário
  user = {
    nome: '', // Nome do usuário
    idade: null, // Idade do usuário
    email: '', // Email do usuário
    senha: '', // Senha do usuário
    nomeDoResponsavel: '',
    nomeDoResponsavel2: ''
  };
  sucesso: boolean | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  // Método que envia os dados para o backend
  onSubmit(): void {
    const url = 'https://ecoeduca.duckdns.org/alunos'; // URL do backend

    const usuario = {
        nome: this.user.nome,
        idade: this.user.idade,
        email: this.user.email,
        senha: this.user.senha,
        nomeDoResponsavel: this.user.nomeDoResponsavel,
        nomeDoResponsavel2: this.user.nomeDoResponsavel2
    };

    this.http.post(url, usuario).subscribe(
        response => {
            console.log('Usuário cadastrado com sucesso', response);
            this.sucesso = true; // Exibe mensagem de sucesso
        },
        error => {
            console.error('Erro ao cadastrar usuário', error);
            this.sucesso = false; // Não exibe mensagem de sucesso
        }
    );
}

  fazerLogin(): void {
    this.authService.login(this.nome, this.senha).subscribe(
      (response) => {
        console.log('Resposta do login:', response);
        if (response && response.idAluno) {
          this.authService.salvarIdAluno(response.idAluno);
          this.router.navigate(['/perfil']);
        } else {
          console.error('Login falhou');
        }
      },
      (error) => {
        console.error('Erro ao fazer login:', error);
      }
    );
  }
}