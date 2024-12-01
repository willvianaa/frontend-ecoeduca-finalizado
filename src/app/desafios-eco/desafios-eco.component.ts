import { Component, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Postagem {
  id: number;
  nome: string;
  descricao: string;
  imagemUrl: string; // A URL da imagem será salva aqui (não mais "imagem")
  pontos: number;
  checkList: { item: string; feito: boolean }[];
  dataCriacao: string;
}

@Component({
  selector: 'app-desafios-eco',
  templateUrl: './desafios-eco.component.html',
  styleUrls: ['./desafios-eco.component.css'],
  standalone: false
})
export class DesafiosEcoComponent implements AfterViewChecked {
  postagens: Postagem[] = [];
  nome: string = '';
  descricao: string = '';
  imagem: File | null = null;
  imagemUrl: string = ''; // URL da imagem para visualização

  private imagemAtualizada: boolean = false; // Flag para controlar a atualização da imagem
  router: any;

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient) {}

  // Detecta alterações após a renderização da visualização
  ngAfterViewChecked(): void {
    if (this.imagemAtualizada) {
      this.cdr.detectChanges(); // Força a detecção de mudanças
      this.imagemAtualizada = false; // Reseta a flag após a atualização
    }
  }

  // Função chamada quando uma imagem é selecionada
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imagem = file;
      this.imagemUrl = URL.createObjectURL(file); // Gera a URL da imagem para visualização
      this.imagemAtualizada = true; // Marca que a imagem foi atualizada
    }
  }

  // Adicionar uma nova postagem
  adicionarPostagem(): void {
    if (this.nome && this.descricao && this.imagem) {
      const formData = new FormData();

      formData.append('nome', this.nome);
      formData.append('descricao', this.descricao);
      formData.append('pontos', Math.floor(Math.random() * 101).toString());
      formData.append(
        'checkList',
        JSON.stringify([
          { item: 'Embalar com segurança', feito: false },
          { item: 'Levar no horário certo', feito: false },
          { item: 'Explicar o desafio para os colegas', feito: false },
        ])
      );

      if (this.imagem instanceof File) {
        formData.append('imagem', this.imagem);
      }

      this.http.post('http://localhost:8080/postagens/upload', formData).subscribe(
        (response: any) => {
          console.log('Postagem criada com sucesso!', response);
          this.limparFormulario();
          this.getPostagens(); // Atualiza a lista de postagens após a criação
        },
        (error) => {
          console.error('Erro ao criar postagem:', error);
        }
      );
    } else {
      alert('Preencha todos os campos!');
    }
  }

  // Carregar postagens do backend
  ngOnInit(): void {
    this.getPostagens();
  }

  getPostagens(): void {
    this.http.get<Postagem[]>('http://localhost:8080/postagens').subscribe(
      (response) => {
        this.postagens = response;
        console.log(this.postagens);
      },
      (error) => {
        console.error('Erro ao carregar as postagens:', error);
      }
    );
  }

  marcarCheckList(postagem: Postagem, index: number): void {
    postagem.checkList[index].feito = !postagem.checkList[index].feito;
  }

  limparFormulario(): void {
    this.nome = '';
    this.descricao = '';
    this.imagem = null;
    this.imagemUrl = '';
  }

  deletarPostagem(id: number): void {
    this.http.delete(`http://localhost:8080/postagens/${id}`).subscribe(
      (response) => {
        console.log('Postagem excluída com sucesso!', response);
        this.postagens = this.postagens.filter((postagem) => postagem.id !== id);
      },
      (error) => {
        console.error('Erro ao excluir postagem:', error);
      }
    );
  }

  voltarParaHome(): void {
    this.router.navigate(['/home']);  // Navegar para a página inicial
  }
  }

