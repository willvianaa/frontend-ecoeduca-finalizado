import { Component } from '@angular/core';

@Component({
  selector: 'app-jornadadagua',
  templateUrl: './jornadadagua.component.html',
  styleUrl: './jornadadagua.component.css',
  standalone: false
})
export class JornadadaguaComponent {
  historias = [
    { texto: 'Uma gota d’água narra sua aventura desde a nascente de um rio até o oceano, enfrentando poluição e desmatamento...', imagem: 'https://img.icons8.com/?size=100&id=vBRvJEJ4dJMI&format=png&color=000000' },
    { texto: 'Ela mostra como a ação humana afeta os ciclos naturais e por que é crucial conservar a água...', imagem: 'https://img.icons8.com/?size=100&id=IT6kDtkWerI-&format=png&color=000000' },
    { texto: 'Organizaram eventos para coletar lixo reciclável e transformaram as garrafas plásticas em brinquedos....', imagem: 'https://img.icons8.com/?size=100&id=lfGnJ_gI-UsF&format=png&color=000000' },
    { texto: 'No final, comunidades se unem para limpar rios e proteger nascentes.', imagem: 'https://img.icons8.com/?size=100&id=sKD-XfkfU19E&format=png&color=000000' },
    { texto: 'Moral da história: A água é um recurso valioso e indispensável; devemos usá-la com sabedoria e responsabilidade.', imagem: 'https://img.icons8.com/?size=100&id=ETtWcACCFuZH&format=png&color=000000' }
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
