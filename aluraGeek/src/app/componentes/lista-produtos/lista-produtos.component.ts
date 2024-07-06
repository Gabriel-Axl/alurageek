import { Component, Input, OnInit } from '@angular/core';
import { Produto, ProdutoServiceService } from 'src/app/services/produto-service.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produto:Produto[] = [];
  constructor(private service:ProdutoServiceService) { }

  ngOnInit(): void {
    this.produto = this.service.getProdutos()
  }



}

