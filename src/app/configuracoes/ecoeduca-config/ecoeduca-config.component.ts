import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-ecoeduca-config',
  templateUrl: './ecoeduca-config.component.html',
  styleUrl: './ecoeduca-config.component.css'
})
export class EcoeducaConfigComponent {
  nome: string = '';
  senha: string = '';
  idAluno: number | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  voltarParaHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    // Pega o id do aluno do localStorage
    this.idAluno = this.authService.getIdAluno();
    
    if (!this.idAluno) {
      // Se não estiver logado, redireciona para a página de login
      this.router.navigate(['/login']);
    }
  }

  // Método que será chamado ao clicar no botão de salvar
   // Método para atualizar o nome
   onSalvarNome(): void {
    if (this.idAluno && this.nome) {
      this.authService.atualizarNome(this.idAluno, this.nome).subscribe(
        response => {
          console.log('Nome atualizado com sucesso', response);
          // Redireciona para a página do perfil ou qualquer outra após atualizar
        },
        error => {
          console.error('Erro ao atualizar nome', error);
        }
      );
    }
  }

  // Método para atualizar a senha
  onSalvarSenha(): void {
    if (this.idAluno && this.senha) {
      this.authService.atualizarSenha(this.idAluno, this.senha).subscribe(
        response => {
          console.log('Senha atualizada com sucesso', response);
          // Redireciona para a página do perfil ou qualquer outra após atualizar
        },
        error => {
          console.error('Erro ao atualizar senha', error);
        }
      );
    }
  }
}
