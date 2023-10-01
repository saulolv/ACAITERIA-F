import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AcompanhamentoModalComponent } from '../acompanhamento-modal/acompanhamento-modal.component';
import { CarrinhoModalComponent } from '../carrinho-modal/carrinho-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  copos = [
    {nome: 'Copo 1', preco:10.00, image: 'assets/img/copo_acai.png'},
    {nome: 'Copo 2', preco:20.00, image: 'assets/img/copo_acai.png'},
    {nome: 'Copo 3', preco:30.00, image: 'assets/img/copo_acai.png'},];
  tigelas = [
    {nome: 'Tigela 1', preco:10.00, image: 'assets/img/tigela_acai.png'},
    {nome: 'Tigela 2', preco:20.00, image: 'assets/img/tigela_acai.png'},
    {nome: 'Tigela 3', preco:30.00, image: 'assets/img/tigela_acai.png'},];
  
  constructor(private router: Router, public dialog: MatDialog) { }

  abrirModalAcompanhamentos(item: any) {
    // Abra o modal de acompanhamentos e passe o item selecionado para ele
    const dialogRef = this.dialog.open(AcompanhamentoModalComponent, {
      data: item
    });

    // Quando o modal for fechado, pegue o resultado dele
    // eu quero que o usuario possa selecionar varios itens e isso va para o carrinho
    // entao eu vou pegar o resultado e adicionar no carrinho
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  abrirCarrinho() {
    const dialog = this.dialog.open(CarrinhoModalComponent, {
      width: '80%',
      height: '80%'
    });

    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
