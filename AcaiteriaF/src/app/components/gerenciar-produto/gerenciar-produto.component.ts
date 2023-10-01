import { Component, OnInit } from '@angular/core';
import { ProdutoServiceService } from 'src/app/services/Produto/produto-service.service';

@Component({
  selector: 'app-gerenciar-produto',
  templateUrl: './gerenciar-produto.component.html',
  styleUrls: ['./gerenciar-produto.component.css']
})
export class GerenciarProdutoComponent implements OnInit {
  produtos: any[] = [];

  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit(): void {
    this.listProdutos();
  }

  listProdutos(){
    this.produtoService.getProdutosList().subscribe(
      data => {
        this.produtos = data;
      },
      error => {
        console.log("Erro ao listar produtos: " + error);
      }
    );
  }

}
