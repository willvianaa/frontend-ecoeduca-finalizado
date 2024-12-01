import { Component } from '@angular/core';

@Component({
  selector: 'app-reciclador-estrela',
  templateUrl: './reciclador-estrela.component.html',
  styleUrl: './reciclador-estrela.component.css',
  standalone: false
})
export class RecicladorEstrelaComponent {
  historias = [
    { texto: 'Uma criança sonha que está em um planeta onde o lixo ameaça apagar as estrelas...', imagem: 'https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000' },
    { texto: 'Junto com uma criatura mágica, cria invenções ecológicas e inspira as pessoas a reciclarem...', imagem: 'https://img.icons8.com/?size=100&id=47000&format=png&color=000000' },
    { texto: 'As estrelas começam a brilhar novamente, trazendo esperança para o futuro...', imagem: 'https://img.icons8.com/?size=100&id=q0lENidHqJJ2&format=png&color=000000' },
    { texto: 'Moral da história: Reciclar não só preserva o meio ambiente como também mantém viva a beleza do universo.', imagem: 'https://img.icons8.com/?size=100&id=dxmsuJkKOfi4&format=png&color=000000' },
  
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


