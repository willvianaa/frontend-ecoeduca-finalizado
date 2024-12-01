import { Component } from '@angular/core';

@Component({
  selector: 'app-mariaeaarvore',
  templateUrl: './mariaeaarvore.component.html',
  styleUrl: './mariaeaarvore.component.css',
  standalone: false
})
export class MariaeaarvoreComponent {
  historias = [
    { texto: 'Maria, uma jovem de 10 anos, adorava brincar perto de uma grande árvore no quintal de sua casa...', imagem: 'https://img.icons8.com/?size=100&id=WOw8BVjaqhoo&format=png&color=000000' },
    { texto: 'Um dia, a árvore falou com ela e pediu ajuda para plantar novas mudas...', imagem: 'https://img.icons8.com/?size=100&id=yXrgofMpkBXn&format=png&color=000000' },
    { texto: 'Maria chamou sua família e vizinhos, e juntos plantaram dezenas de árvores ao redor do bairro...', imagem: 'https://img.icons8.com/?size=100&id=81284&format=png&color=000000' },
    { texto: 'Em poucos anos, a região ficou cheia de pássaros e com ar mais limpo...', imagem: 'https://img.icons8.com/?size=100&id=SFUN6DqJTqwG&format=png&color=000000' },
    { texto: 'Moral da história: Plantar árvores é plantar um futuro melhor.', imagem: 'https://img.icons8.com/?size=100&id=107450&format=png&color=000000' }
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
