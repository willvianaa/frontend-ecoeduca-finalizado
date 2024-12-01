import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

export interface Aluno {
  nome: string;
  idade: number;
  responsavelNome: string;
  pontuacao: number;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  alunos: Aluno | null = null;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const idAluno = this.authService.getIdAluno();
    if (idAluno) {
        this.getAluno(idAluno);  // Chama a função para buscar os dados do aluno
    } else {
        this.router.navigate(['/login']);  // Se não tiver ID, redireciona para o login
    }
  }

  getAluno(id: number): void {
    this.http.get<Aluno>(`http://localhost:8080/alunos/${id}`).subscribe(
      response => {
        console.log('Dados do aluno:', response);  // Adicione um log para depuração
        this.alunos = response;
      },
      error => {
        console.error('Erro ao carregar os dados do aluno:', error);
      }
    );
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  voltarParaHome() {
    this.router.navigate(['/home']);
  }
}
