import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { HomeComponent } from './components/home/home.component';
import { GerenciarProdutoComponent } from './components/gerenciar-produto/gerenciar-produto.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'menu-list', component: MenuListComponent },
  { path: 'admin/produto', component: GerenciarProdutoComponent },
  { path: 'admin/acompanhamento', component: AdminComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
