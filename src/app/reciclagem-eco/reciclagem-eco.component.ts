import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reciclagem-eco',
    templateUrl: './reciclagem-eco.component.html',
    styleUrl: './reciclagem-eco.component.css',
    standalone: false
})
export class ReciclagemEcoComponent {
  lixeiraCorreta!: string; // Define a cor correta da lixeira
  mensagem!: string; // Armazena a mensagem de feedback
  sucesso!: boolean; // Indica se a resposta foi correta ou errada
  proximaAtividadeDisponivel: boolean = false; // Controle para exibir o botão "Próxima Atividade"

  constructor(private router: Router) {} // Injeta o serviço de roteamento

  ngOnInit(): void {
    // Configura a cor correta da lixeira para a atividade atual
    this.lixeiraCorreta = 'azul';
  }

  voltarHome(): void {
    // Método para voltar para a página inicial
    this.router.navigate(['/home']); // Substitua '/home' pelo caminho da sua página inicial
  }

  verificarResposta(lixeiraEscolhida: string): void {
    if (lixeiraEscolhida === this.lixeiraCorreta) {
      this.exibirMensagem('Parabéns! Você acertou! 🎉 O papel vai na lixeira azul.', true);
      this.proximaAtividadeDisponivel = true; // Ativa o botão de próxima atividade
    } else {
      this.exibirMensagem('Ops! Você errou. Tente novamente. ❌', false);
    }
  }

  exibirMensagem(mensagem: string, sucesso: boolean): void {
    this.mensagem = mensagem;
    this.sucesso = sucesso;

    // Remove a mensagem após 3 segundos, se for erro
    if (!sucesso) {
      setTimeout(() => {
        this.mensagem = '';
      }, 3000);
    }
  }

  proximaAtividade(): void {
    // Lógica para carregar a próxima atividade
    this.router.navigate(['/segunda-atividade']);
    this.mensagem = '';
    this.proximaAtividadeDisponivel = false;
    this.lixeiraCorreta = 'verde'; // Exemplo: altera a próxima resposta para vidro
    alert('Próxima atividade carregada! 🗑️');
  }
}