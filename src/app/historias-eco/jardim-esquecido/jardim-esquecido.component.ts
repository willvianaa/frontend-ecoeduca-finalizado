import { Component } from '@angular/core';

@Component({
  selector: 'app-jardim-esquecido',
  templateUrl: './jardim-esquecido.component.html',
  styleUrl: './jardim-esquecido.component.css',
  standalone: false
})
export class JardimEsquecidoComponent {

historias = [
  { texto: 'Um grupo de crianças encontra um jardim abandonado na cidade e decide revitalizá-lo...', imagem: 'https://img.icons8.com/?size=100&id=3mTG9Ugv0TlC&format=png&color=000000' },
  { texto: 'Elas aprendem sobre compostagem, cultivo de alimentos orgânicos e plantio sustentável, transformando o local em um refúgio para toda a comunidade.  ', imagem: 'https://img.icons8.com/?size=100&id=ib8fvSIANhAz&format=png&color=000000' },
  { texto: 'Pequenas ações locais podem criar grandes impactos positivos no ambiente e na sociedade.', imagem: 'https://img.icons8.com/?size=100&id=5RPUJWt6xvey&format=png&color=0000000' }
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

