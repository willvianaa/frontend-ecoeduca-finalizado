import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-historias-eco',
  templateUrl: './historias-eco.component.html',
  styleUrl: './historias-eco.component.css',
  standalone: false
})
export class HistoriasEcoComponent {
  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/home']); // Navega para a página inicial
  }

  lerHistoria() {
    this.router.navigate(['/joaoealixeira']); // Exemplo de rota para leitura
  }
}
