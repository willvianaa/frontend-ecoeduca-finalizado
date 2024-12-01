import { Component } from '@angular/core';

@Component({
  selector: 'app-lucaseaenergia',
  templateUrl: './lucaseaenergia.component.html',
  styleUrl: './lucaseaenergia.component.css',
  standalone: false
})
export class LucaseaenergiaComponent {
  historias = [
    { texto: 'Lucas era curioso e adorava ciência...', imagem: 'https://img.icons8.com/?size=100&id=Im8npXfB6ZSK&format=png&color=000000' },
    { texto: 'Um dia, aprendeu na escola sobre energia solar e decidiu fazer um projeto...', imagem: 'https://img.icons8.com/?size=100&id=ME2L-PAmXc67&format=png&color=000000' },
    { texto: ' Junto com seus professores, instalou pequenos painéis solares para iluminar o pátio da escola...', imagem: 'https://img.icons8.com/?size=100&id=0jelzv5KeESP&format=png&color=000000' },
    { texto: 'A iniciativa foi um sucesso e incentivou outras escolas da região a adotarem fontes de energia sustentável...', imagem: 'https://img.icons8.com/?size=100&id=69985&format=png&color=000000' },
    { texto: 'Moral da história: A tecnologia pode ser uma aliada do meio ambiente.', imagem: 'https://img.icons8.com/?size=100&id=yggUP2AbmFLz&format=png&color=000000' }
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

