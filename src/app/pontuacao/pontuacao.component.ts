import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface UsuarioPontuacao {
  nome: string; // Nome do usuário
  pontuacao: number; // Pontos acumulados
}

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css'],
})
export class PontuacaoComponent implements OnInit {
  ranking: UsuarioPontuacao[] = []; // Lista do ranking
  topUsuario: UsuarioPontuacao | null = null; // Usuário com a maior pontuação

  constructor(private router: Router, private http: HttpClient) {}

  // Navegar para a página inicial
  voltarParaHome(): void {
    this.router.navigate(['/home']);
  }

  // Carregar o ranking do backend
  getRanking(): void {
    this.http.get<UsuarioPontuacao[]>('https://ecoeduca.duckdns.org/alunos/ranking').subscribe(
      (response) => {
        // Ordenar por pontos em ordem decrescente
        const sortedRanking = response.sort((a, b) => b.pontuacao - a.pontuacao);

        // Definir o usuário com maior pontuação
        this.topUsuario = sortedRanking.length > 0 ? sortedRanking[0] : null;

        // Remover o `topUsuario` e limitar o ranking a 10 usuários
        this.ranking = sortedRanking.slice(1, 10);
      },
      (error) => {
        console.error('Erro ao carregar o ranking:', error);
      }
    );
  }

  // Inicializar o componente e carregar os dados do ranking
  ngOnInit(): void {
    this.getRanking();
  }
}
