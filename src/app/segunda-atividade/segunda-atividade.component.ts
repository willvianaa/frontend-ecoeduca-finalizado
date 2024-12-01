import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-atividade',
  templateUrl: './segunda-atividade.component.html',
  styleUrls: ['./segunda-atividade.component.css']
})
export class SegundaAtividadeComponent {
  currentDraggedType: string | null = null;
  feedback: string | null = null;
  currentDraggedElement: HTMLElement | null = null;

  // Inicia o drag do material
  startDrag(materialType: string, event: Event) {
    this.currentDraggedType = materialType;
    const target = event.target as HTMLElement;

    // Para dispositivos móveis, marcamos o elemento atual
    this.currentDraggedElement = target.closest('.material') as HTMLElement;
    console.log(`Material iniciado para drag: ${this.currentDraggedType}`);
  }

  // Permite o drop
  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  // Ação ao soltar o material na lixeira
  onDrop(binType: string, event: DragEvent) {
    event.preventDefault(); // Previne comportamento padrão do navegador

    console.log(`Tipo da lixeira: ${binType}`);
    console.log(`Tipo do material arrastado: ${this.currentDraggedType}`);

    if (this.currentDraggedType?.trim().toLowerCase() === binType.trim().toLowerCase()) {
      this.feedback = 'Parabéns! Você classificou o resíduo corretamente!';
    } else {
      this.feedback = 'Ops! Esse não é o local correto.';
    }
    this.resetDragState();
  }

  // Para dispositivos móveis: mover o elemento
  onTouchMove(event: TouchEvent) {
    if (!this.currentDraggedElement) return;

    const touch = event.touches[0];
    this.currentDraggedElement.style.position = 'absolute';
    this.currentDraggedElement.style.left = `${touch.pageX - 50}px`;
    this.currentDraggedElement.style.top = `${touch.pageY - 50}px`;
  }

  // Para dispositivos móveis: soltar o elemento
  onTouchEnd(event: TouchEvent) {
    if (!this.currentDraggedElement) return;

    const bins = document.querySelectorAll('.bin');
    let correctDrop = false;

    // Coordenadas do toque
    const touch = event.changedTouches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;

    bins.forEach((bin) => {
      const rect = bin.getBoundingClientRect();

      // Verifica se o toque final está dentro da lixeira
      const isInsideBin =
        touchX >= rect.left &&
        touchX <= rect.right &&
        touchY >= rect.top &&
        touchY <= rect.bottom;

      if (isInsideBin) {
        const binType = bin.textContent?.trim().toLowerCase(); // Obtem o tipo da lixeira
        console.log('Toque dentro da lixeira:', binType);

        if (binType === this.currentDraggedType) {
          this.feedback = 'Parabéns! Você classificou o resíduo corretamente!';
          correctDrop = true;
        } else {
          this.feedback = 'Ops! Esse não é o local correto.';
        }
      }
    });

    this.resetDragState();
  }

  // Reseta o estado após o drop
  resetDragState() {
    if (this.currentDraggedElement) {
      this.currentDraggedElement.style.position = '';
      this.currentDraggedElement.style.left = '';
      this.currentDraggedElement.style.top = '';
    }
    this.currentDraggedElement = null;
    this.currentDraggedType = null;
  }
}
