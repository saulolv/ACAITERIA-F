import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { GerenciarProdutoComponent } from './components/gerenciar-produto/gerenciar-produto.component';
import { AcompanhamentoModalComponent } from './components/acompanhamento-modal/acompanhamento-modal.component';
import { CarrinhoModalComponent } from './components/carrinho-modal/carrinho-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MenuListComponent,
    HomeComponent,
    GerenciarProdutoComponent,
    AcompanhamentoModalComponent,
    CarrinhoModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
