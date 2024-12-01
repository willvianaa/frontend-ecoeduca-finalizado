import { Component } from '@angular/core';

@Component({
  selector: 'app-pedroeomar',
  templateUrl: './pedroeomar.component.html',
  styleUrl: './pedroeomar.component.css',
  standalone: false
})
export class PedroeomarComponent {
  historias = [
    { texto: 'Pedro, um garoto que adorava surfar, ficou triste ao ver o mar cheio de lixo...', imagem: 'https://img.icons8.com/?size=100&id=e4qNAF_SHpHl&format=png&color=000000' },
    { texto: ' Ele decidiu agir e organizou mutirões para limpar a praia com seus amigos...', imagem: 'https://img.icons8.com/?size=100&id=rxyY2JYOueqn&format=png&color=000000' },
    { texto: 'Ao mesmo tempo, criou campanhas para conscientizar os moradores sobre o descarte correto do lixo...', imagem: 'https://img.icons8.com/?size=100&id=BdtIqpwCOjU5&format=png&color=000000' },
    { texto: 'Com o tempo, as praias ficaram limpas, e as tartarugas voltaram a aparecer...', imagem: 'https://img.icons8.com/?size=100&id=ReBXWBo7bj-u&format=png&color=000000' },
    { texto: 'Moral da história: Cuidar dos mares é cuidar da vida no planeta.', imagem: 'https://img.icons8.com/?size=100&id=17569&format=png&color=000000' }
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


