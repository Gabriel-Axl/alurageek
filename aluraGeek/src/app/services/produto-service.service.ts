import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  private produtos:Produto[] = [];

  constructor() { }

  guardarProduto(nome:string, preco:number, imagem:string){
    this.produtos.push(new Produto(nome, preco, imagem))
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}

export class Produto {
  nome: string;
  preco: number;
  imagem: string;

  constructor(nome: string, preco: number, imagem: string) {
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
  }
}
