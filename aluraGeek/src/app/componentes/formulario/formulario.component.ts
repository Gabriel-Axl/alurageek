import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  @Input() nome:String = ""
  @Input() preco:Number = 0 
  @Input() imagem:String = ""

  constructor() { }

  ngOnInit(): void {
  }

  adicionarProduto() {
    console.log(this.nome, this.preco, this.imagem);
    this.limparForm()
  }

  limparForm(){
    this.nome = ""
    this.preco = 0
    this.imagem = ""
  }

}
