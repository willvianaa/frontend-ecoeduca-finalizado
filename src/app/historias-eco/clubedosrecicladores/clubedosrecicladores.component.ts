import { Component } from '@angular/core';

@Component({
  selector: 'app-clubedosrecicladores',
  templateUrl: './clubedosrecicladores.component.html',
  styleUrl: './clubedosrecicladores.component.css',
  standalone: false
})
export class ClubedosrecicladoresComponent {
  historias = [
    { texto: 'Na adolescência, João e seus amigos criaram o "Clube dos Recicladores"...', imagem: 'https://img.icons8.com/?size=100&id=yG5VE5fPlOxo&format=png&color=000000' },
    { texto: 'Juntos, eles ensinavam as crianças do bairro a reciclar e cuidar do meio ambiente...', imagem: 'https://img.icons8.com/?size=100&id=1YP3BsIOeq0o&format=png&color=000000' },
    { texto: 'Organizaram eventos para coletar lixo reciclável e transformaram as garrafas plásticas em brinquedos....', imagem: 'https://img.icons8.com/?size=100&id=5fkyWH9yxJOk&format=png&color=000000' },
    { texto: 'Logo, o bairro ficou conhecido por ser o mais limpo e sustentável da cidade...', imagem: 'https://img.icons8.com/?size=100&id=7188&format=png&color=000000' },
    { texto: 'Moral da história: Quando trabalhamos em equipe, conseguimos proteger o planeta.', imagem: 'https://img.icons8.com/?size=100&id=rHeIASNeN99k&format=png&color=000000' }
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

