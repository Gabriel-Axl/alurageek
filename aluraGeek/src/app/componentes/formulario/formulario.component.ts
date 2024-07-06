import { Component, OnInit, Input } from '@angular/core';
import { ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nome:string = "";
  preco!:number;
  imagem:string = ""

  constructor(private produtoServ:ProdutoServiceService) { }

  ngOnInit(): void {
  }

  adicionarProduto() {
    this.produtoServ.guardarProduto(this.nome, this.preco, this.imagem)
    console.log(this.produtoServ.getProdutos());
    this.limparForm()
  }

  limparForm(){
    this.nome = ""
    this.preco = 0
    this.imagem = ""
  }

}

