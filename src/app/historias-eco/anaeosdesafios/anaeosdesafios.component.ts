import { Component } from '@angular/core';

@Component({
  selector: 'app-anaeosdesafios',
  templateUrl: './anaeosdesafios.component.html',
  styleUrl: './anaeosdesafios.component.css',
  standalone: false
})
export class AnaeosdesafiosComponent {
  historias = [
    { texto: 'Ana descobriu que sua cidade estava enfrentando uma grande crise hídrica...', imagem: 'https://img.icons8.com/?size=100&id=18534&format=png&color=000000' },
    { texto: 'Com a ajuda de seus colegas da escola, ela criou um projeto para economizar água...', imagem: 'https://img.icons8.com/?size=100&id=80772&format=png&color=000000' },
    { texto: 'Eles ensinaram as famílias a fechar a torneira enquanto escovavam os dentes e a reutilizar a água da chuva...', imagem: 'https://img.icons8.com/?size=100&id=13269&format=png&color=000000' },
    { texto: 'Graças ao projeto, a cidade conseguiu reduzir o desperdício e salvar recursos...', imagem: 'https://img.icons8.com/?size=100&id=1613&format=png&color=000000' },
    { texto: 'Moral da história: Cada gota economizada faz a diferença.', imagem: 'https://img.icons8.com/?size=100&id=114615&format=png&color=000000' }
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
