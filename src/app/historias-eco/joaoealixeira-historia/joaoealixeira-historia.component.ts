import { Component } from '@angular/core';

@Component({
  selector: 'app-joaoealixeira-historia',
  templateUrl: './joaoealixeira-historia.component.html',
  styleUrl: './joaoealixeira-historia.component.css',
  standalone: false
})
export class JoaoealixeiraHistoriaComponent {
  historias = [
    { texto: 'Era uma vez um menino chamado João...', imagem: 'https://img.icons8.com/?size=100&id=Uz82u8KAZK8p&format=png&color=000000' },
    { texto: 'Ele tinha 6 anos e, na escola, aprendeu sobre a importância de separar o lixo nas lixeiras corretas....', imagem: 'https://img.icons8.com/?size=100&id=MVNQ81CrsWZZ&format=png&color=000000' },
    { texto: 'Certo dia, enquanto brincava no parque, viu uma caixa de leite no chão....', imagem: 'https://img.icons8.com/?size=100&id=64627&format=png&color=000000' },
    { texto: 'Lembrou-se do que aprendeu e a jogou na lixeira verde para reciclagem....', imagem: 'https://img.icons8.com/?size=100&id=7YaOWHH6dVr7&format=png&color=000000' },
    { texto: 'Seu gesto inspirou outras crianças, e o parque ficou limpo novamente.', imagem: 'https://img.icons8.com/?size=100&id=mmBF0ox43X08&format=png&color=000000' }
  ];

  historiaAtual = 0;

  // Navegar para a próxima história
  avancar() {
    if (this.historiaAtual < this.historias.length - 1) {
      this.historiaAtual++;
    }
  }

  // Navegar para a história anterior
  voltar() {
    if (this.historiaAtual > 0) {
      this.historiaAtual--;
    }
  }
}

