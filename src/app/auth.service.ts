import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/login'; // A URL do endpoint de login no backend
  private apiUrlAlunos = 'http://localhost:8080/alunos';

  constructor(private http: HttpClient) { }

  // Função para autenticar o usuário
  login(email: string, senha: string): Observable<any> {
    const loginRequest = { email, senha };
    return this.http.post<any>(this.apiUrl, loginRequest); // A URL da API
  }  
  
  // Função para salvar o ID do usuário no localStorage
  salvarIdAluno(id: number): void {
    localStorage.setItem('idAluno', id.toString());
  }

  // Função para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return localStorage.getItem('idAluno') !== null;
  }

  // Função para obter o ID do aluno logado
  getIdAluno(): number | null {
    const id = localStorage.getItem('idAluno');
    return id ? parseInt(id, 10) : null;
  }

  // Função para deslogar o usuário
  logout(): void {
    localStorage.removeItem('idAluno');
  }

  // Método para atualizar o nome
  atualizarNome(id: number, nome: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrlAlunos}/${id}/nome`, nome);
  }

  // Método para atualizar a senha
  atualizarSenha(id: number, senha: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrlAlunos}/${id}/senha`, senha);
  }
}
