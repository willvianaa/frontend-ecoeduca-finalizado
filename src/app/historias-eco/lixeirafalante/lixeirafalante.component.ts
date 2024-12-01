import { Component } from '@angular/core';

@Component({
  selector: 'app-lixeirafalante',
  templateUrl: './lixeirafalante.component.html',
  styleUrl: './lixeirafalante.component.css',
  standalone: false
})
export class LixeirafalanteComponent {

  historias = [
    { texto: 'Uma lixeira mágica em uma praça ensina crianças sobre reciclagem e como evitar o desperdício...', imagem: 'https://img.icons8.com/?size=100&id=F0xk4lWFrEuH&format=png&color=000000' },
    { texto: 'Com a ajuda dela, elas transformam um espaço abandonado em um lindo jardim comunitário, atraindo pássaros e borboletas para o local...', imagem: 'https://img.icons8.com/?size=100&id=oh7IY0tkg7k1&format=png&color=000000' },
    { texto: 'Juntos, aprendem sobre o valor de trabalhar em equipe para o bem do planeta.', imagem: 'https://img.icons8.com/?size=100&id=104316&format=png&color=000000' },
    { texto: 'Moral da história: Reciclar e reutilizar podem transformar o mundo ao nosso redor em um lugar melhor e mais bonito.', imagem: 'https://img.icons8.com/?size=100&id=11264&format=png&color=000000' }
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





