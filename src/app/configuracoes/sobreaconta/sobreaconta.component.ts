import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';

export interface Aluno {
  nome: string;
  email: string;
  idade: number;
  responsavelNome: string;
  pontuacao: number;
}

@Component({
  selector: 'app-sobreaconta',
  templateUrl: './sobreaconta.component.html',
  styleUrl: './sobreaconta.component.css'
})
export class SobreacontaComponent {
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

  voltarParaHome() {
    this.router.navigate(['/home']);
  }

}
